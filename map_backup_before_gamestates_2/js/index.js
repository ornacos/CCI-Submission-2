const width = 500;
const height = 500;

function renderMap(
  svgSelector,
  geojsonUrl,
  csvUrl,
  boundsConfig,
  scalePadding = 1.3,
  initialZoomTransform = null,
  translateExtentOverride = null
) {
  // to clear existing svg content
  d3.select(svgSelector).selectAll("*").remove();

  const svg = d3
    .select(svgSelector)
    .attr("width", width)
    .attr("height", height);

  const container = svg.append("g");

  const projection = d3.geoMercator();
  const path = d3.geoPath().projection(projection);

  const { minLat, maxLat, minLng, maxLng } = boundsConfig;

  const boundsGeoJSON = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [minLng, minLat],
              [minLng, maxLat],
              [maxLng, maxLat],
              [maxLng, minLat],
              [minLng, minLat],
            ],
          ],
        },
      },
    ],
  };

  // fit the projection to bounding box with padding
  projection.fitSize(
    [width / scalePadding, height / scalePadding],
    boundsGeoJSON
  );

  const zoom = d3
    .zoom()
    .scaleExtent([1, 8])
    .translateExtent(
      translateExtentOverride || [
        [0, 0],
        [width, height],
      ]
    )
    .on("zoom", (event) => {
      container.attr("transform", event.transform);
    });

  svg.call(zoom);

  if (initialZoomTransform) {
    svg.call(zoom.transform, initialZoomTransform);
  }

  // roads drawn here
  const roadsGroup = container.append("g").attr("class", "roads");

  d3.json(geojsonUrl).then((geoData) => {
    roadsGroup
      .selectAll("path")
      .data(geoData.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "none")
      .attr("stroke", "#aaa")
      .attr("stroke-width", 0.5);
  });

  // plot lat/lng
  d3.csv(csvUrl).then((data) => {
    const filtered = data.filter(
      (d) => d.lat && d.lng && !isNaN(d.lat) && !isNaN(d.lng)
    );

    container
      .selectAll("circle")
      .data(filtered)
      .enter()
      .append("circle")
      .attr("class", "map-point")
      .attr("r", 6)
      .attr("transform", (d) => {
        const [x, y] = projection([+d.lng, +d.lat]);
        return `translate(${x},${y})`;
      })
      .attr("class", "map-point")
      .style("cursor", "pointer")
      .style("pointer-events", "visible")
      .on("click", function (event, d) {
        console.log("Clicked on:", d.name);

        const rightSidebar = document.getElementById("rightSidebar");
        const rightSidebarContent = document.getElementById(
          "rightSidebarContent"
        );

        rightSidebar.style.transition = "transform 0.3s ease";
        rightSidebar.classList.add("active");

        rightSidebarContent.innerHTML =
          customProfiles[d.name] || `<p>unfinished</p>`; // name looks up name from csv
      });
  });
}

// --------- bounding boxes and initial zoom/pan settings ---------

const csmBounds = {
  minLat: 51.529891,
  maxLat: 51.539669,
  minLng: -0.13478,
  maxLng: -0.11397,
};

const csmInitialZoom = d3.zoomIdentity.translate(-40, -50).scale(1.4);

const csmTranslateExtent = [
  [0, -50],
  [width - 40, height - 40],
];

const camberwellBounds = {
  minLat: 51.4685,
  maxLat: 51.479,
  minLng: -0.0898,
  maxLng: -0.0702,
};

const camberwellInitialZoom = d3.zoomIdentity.translate(-35, 10).scale(1.4);

document.addEventListener("DOMContentLoaded", () => {
  renderMap(
    "#map1 svg",
    "../data/csm_roads.geojson",
    "../data/csm_datawalk.csv",
    csmBounds,
    1.3,
    csmInitialZoom,
    csmTranslateExtent
  );

  renderMap(
    "#map2 svg",
    "../data/camberwell_roads.geojson",
    "../data/camberwell_datawalk.csv",
    camberwellBounds,
    1.1,
    camberwellInitialZoom
  );
});

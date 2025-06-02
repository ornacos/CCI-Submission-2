// moved to script.js

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

  d3.csv(csvUrl).then((data) => {
    const filtered = data.filter(
      (d) => d.lat && d.lng && !isNaN(d.lat) && !isNaN(d.lng)
    );

    container
      .selectAll("circle")
      .data(filtered)
      .enter()
      .append("circle")
      .attr("r", 6)
      .attr("transform", (d) => {
        const [x, y] = projection([+d.lng, +d.lat]);
        return `translate(${x},${y})`;
      })
      .attr("fill", "steelblue")
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

        rightSidebarContent.innerHTML = `
          <h2>N</h2>
          <p><strong>Name:</strong> ${d.name || "N/A"}</p>
          <p><strong>Type:</strong> ${d.category || "N/A"}</p>
          <p><strong>Lat:</strong> ${d.lat}</p>
          <p><strong>Lng:</strong> ${d.lng}</p>
        `;
      });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderMap(
    "#svg2",
    "../data/camberwell_roads.geojson",
    "../data/camberwell_datawalk.csv",
    {
      minLat: 51.47,
      maxLat: 51.48,
      minLng: -0.09,
      maxLng: -0.07,
    }
  );

  renderMap("#svg1", "../data/csm_roads.geojson", "../data/csm_datawalk.csv", {
    minLat: 51.529891,
    maxLat: 51.539669,
    minLng: -0.13478,
    maxLng: -0.11397,
  });
});

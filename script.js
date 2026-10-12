import { d } from './data.js';

const svg = d3.select('.stats');

const existingRects = svg.select('.rects-wrapper').node();
const flipGroup = svg.insert('g', '.labels').attr('transform', 'translate(0, 380)');             // baseline на 380
const scaleGroup = flipGroup.append('g').attr('transform', 'scale(1, -1)');

scaleGroup.node().appendChild(existingRects);// переносим <g class="rects-wrapper">

d3.select(existingRects)
  .selectAll('rect')
  .data(d)
  .enter()
  .append('rect')
  .style('fill', 'coral')
  .attr('height', d => d.count * 400 / 100)
  .attr('width', 53)
  .attr('x', (d, i) => i * 80)
  .attr('y', 0)

  const bars = d3.select(existingRects).selectAll('rect').nodes();

  const timeline = anime.timeline({
    duration: 1000,
    easing: 'easeInOutQuad',
  })

  timeline.add({
    targets: bars,
    scaleY: [0, 1],
    opacity: [0, 1],
    delay: anime.stagger(100)
  });

  svg.select('.labels')
    .selectAll('text')
    .data(d)
    .enter()
    .append('text')
    .attr('x', (d, i) => i * 80 + 26.5)
    .attr('y', 400)
    .attr('text-anchor', 'middle')
    .text(d => d.label)

    const labels = d3.select('.labels').selectAll('text').nodes();

    timeline.add({
    targets: labels,
    translateY: [-10, 0],
    opacity: [0, 1],
    delay: anime.stagger(200)
  });
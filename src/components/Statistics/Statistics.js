function Statistics(statistics) {
  console.log(statistics);
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {statistics.map((statistic) => (
          <li class="item" key={statistic.id}>
            <span class="label">{statistic.label}</span>
            <span class="percentage">{statistic.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;

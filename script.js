// script.js

// Dados fornecidos
const data = [
    { Ano: 2012, Curso: 'Administração', Total: 831409 },
    { Ano: 2012, Curso: 'Direito', Total: 737271 },
    { Ano: 2012, Curso: 'Pedagogia', Total: 595128 },
    { Ano: 2012, Curso: 'Contabilidade', Total: 312948 },
    { Ano: 2012, Curso: 'Enfermagem', Total: 234329 },
    { Ano: 2012, Curso: 'Engenharia civil', Total: 201417 },
    { Ano: 2012, Curso: 'Serviço social', Total: 172979 },
    { Ano: 2012, Curso: 'Gestão de pessoas', Total: 168504 },
    { Ano: 2012, Curso: 'Sistemas de informação', Total: 164171 },
    { Ano: 2012, Curso: 'Psicologia', Total: 159136 },
    { Ano: 2013, Curso: 'Administração', Total: 799026 },
    { Ano: 2013, Curso: 'Direito', Total: 769889 },
    { Ano: 2013, Curso: 'Pedagogia', Total: 606794 },
    { Ano: 2013, Curso: 'Contabilidade', Total: 327733 },
    { Ano: 2013, Curso: 'Engenharia civil', Total: 260798 },
    { Ano: 2013, Curso: 'Enfermagem', Total: 228156 },
    { Ano: 2013, Curso: 'Gestão de pessoas', Total: 182138 },
    { Ano: 2013, Curso: 'Psicologia', Total: 177704 },
    { Ano: 2013, Curso: 'Serviço social', Total: 173758 },
    { Ano: 2013, Curso: 'Sistemas de informação', Total: 165838 },
    { Ano: 2014, Curso: 'Direito', Total: 813454 },
    { Ano: 2014, Curso: 'Administração', Total: 800978 },
    { Ano: 2014, Curso: 'Pedagogia', Total: 646502 },
    { Ano: 2014, Curso: 'Contabilidade', Total: 353264 },
    { Ano: 2014, Curso: 'Engenharia civil', Total: 319990 },
    { Ano: 2014, Curso: 'Enfermagem', Total: 249180 },
    { Ano: 2014, Curso: 'Psicologia', Total: 205374 },
    { Ano: 2014, Curso: 'Gestão de pessoas', Total: 190572 },
    { Ano: 2014, Curso: 'Serviço social', Total: 180379 },
    { Ano: 2014, Curso: 'Sistemas de informação', Total: 168974 },
    { Ano: 2015, Curso: 'Direito', Total: 853211 },
    { Ano: 2015, Curso: 'Administração', Total: 765908 },
    { Ano: 2015, Curso: 'Pedagogia', Total: 651781 },
    { Ano: 2015, Curso: 'Engenharia civil', Total: 358625 },
    { Ano: 2015, Curso: 'Contabilidade', Total: 358050 },
    { Ano: 2015, Curso: 'Enfermagem', Total: 260870 },
    { Ano: 2015, Curso: 'Psicologia', Total: 223466 },
    { Ano: 2015, Curso: 'Gestão de pessoas', Total: 181568 },
    { Ano: 2015, Curso: 'Serviço social', Total: 172569 },
    { Ano: 2015, Curso: 'Engenharia de produção', Total: 169388 },
    { Ano: 2016, Curso: 'Direito', Total: 862324 },
    { Ano: 2016, Curso: 'Administração', Total: 710144 },
    { Ano: 2016, Curso: 'Pedagogia', Total: 674521 },
    { Ano: 2016, Curso: 'Engenharia civil', Total: 361974 },
    { Ano: 2016, Curso: 'Contabilidade', Total: 354989 },
    { Ano: 2016, Curso: 'Enfermagem', Total: 273129 },
    { Ano: 2016, Curso: 'Psicologia', Total: 235584 },
    { Ano: 2016, Curso: 'Educação física formação de professor', Total: 185573 },
    { Ano: 2016, Curso: 'Arquitetura e urbanismo', Total: 167341 },
    { Ano: 2016, Curso: 'Serviço social', Total: 164691 },
    { Ano: 2017, Curso: 'Direito', Total: 879234 },
    { Ano: 2017, Curso: 'Pedagogia', Total: 705780 },
    { Ano: 2017, Curso: 'Administração', Total: 681858 },
    { Ano: 2017, Curso: 'Contabilidade', Total: 361565 },
    { Ano: 2017, Curso: 'Engenharia civil', Total: 348150 },
    { Ano: 2017, Curso: 'Enfermagem', Total: 294792 },
    { Ano: 2017, Curso: 'Psicologia', Total: 249910 },
    { Ano: 2017, Curso: 'Educação física', Total: 185811 },
    { Ano: 2017, Curso: 'Arquitetura e urbanismo', Total: 168369 },
    { Ano: 2017, Curso: 'Fisioterapia', Total: 164016 },
    { Ano: 2018, Curso: 'Direito', Total: 863101 },
    { Ano: 2018, Curso: 'Pedagogia', Total: 747890 },
    { Ano: 2018, Curso: 'Administração', Total: 654843 },
    { Ano: 2018, Curso: 'Contabilidade', Total: 359840 },
    { Ano: 2018, Curso: 'Engenharia civil', Total: 318237 },
    { Ano: 2018, Curso: 'Enfermagem', Total: 313237 },
    { Ano: 2018, Curso: 'Psicologia', Total: 260725 },
    { Ano: 2018, Curso: 'Educação física', Total: 190148 },
    { Ano: 2018, Curso: 'Fisioterapia', Total: 174662 },
    { Ano: 2018, Curso: 'Sistemas de informação', Total: 172955 },
    { Ano: 2019, Curso: 'Direito', Total: 831350 },
    { Ano: 2019, Curso: 'Pedagogia', Total: 815959 },
    { Ano: 2019, Curso: 'Administração', Total: 645777 },
    { Ano: 2019, Curso: 'Contabilidade', Total: 358240 },
    { Ano: 2019, Curso: 'Enfermagem', Total: 326750 },
    { Ano: 2019, Curso: 'Engenharia civil', Total: 275537 },
    { Ano: 2019, Curso: 'Psicologia', Total: 270239 },
    { Ano: 2019, Curso: 'Educação física', Total: 222677 },
    { Ano: 2019, Curso: 'Medicina', Total: 187710 },
    { Ano: 2019, Curso: 'Sistemas de informação', Total: 184866 },
    { Ano: 2020, Curso: 'Pedagogia', Total: 816427 },
    { Ano: 2020, Curso: 'Direito', Total: 759361 },
    { Ano: 2020, Curso: 'Administração', Total: 626813 },
    { Ano: 2020, Curso: 'Contabilidade', Total: 351194 },
    { Ano: 2020, Curso: 'Enfermagem', Total: 334779 },
    { Ano: 2020, Curso: 'Psicologia', Total: 275771 },
    { Ano: 2020, Curso: 'Engenharia civil', Total: 234333 },
    { Ano: 2020, Curso: 'Educação física', Total: 231508 },
    { Ano: 2020, Curso: 'Sistemas de informação', Total: 209202 },
    { Ano: 2020, Curso: 'Medicina', Total: 204279 },
    { Ano: 2021, Curso: 'Pedagogia', Total: 789254 },
    { Ano: 2021, Curso: 'Direito', Total: 702485 },
    { Ano: 2021, Curso: 'Administração', Total: 620966 },
    { Ano: 2021, Curso: 'Enfermagem', Total: 388266 },
    { Ano: 2021, Curso: 'Contabilidade', Total: 338933 },
    { Ano: 2021, Curso: 'Psicologia', Total: 289879 },
    { Ano: 2021, Curso: 'Sistemas de informação', Total: 239869 },
    { Ano: 2021, Curso: 'Educação física', Total: 239008 },
    { Ano: 2021, Curso: 'Medicina', Total: 224192 },
    { Ano: 2021, Curso: 'Engenharia civil', Total: 205736 },
    { Ano: 2022, Curso: 'Pedagogia', Total: 821864 },
    { Ano: 2022, Curso: 'Direito', Total: 671726 },
    { Ano: 2022, Curso: 'Administração', Total: 638789 },
    { Ano: 2022, Curso: 'Enfermagem', Total: 457968 },
    { Ano: 2022, Curso: 'Contabilidade', Total: 327499 },
    { Ano: 2022, Curso: 'Psicologia', Total: 314543 },
    { Ano: 2022, Curso: 'Sistemas de informação', Total: 308850 },
    { Ano: 2022, Curso: 'Educação física', Total: 254383 },
    { Ano: 2022, Curso: 'Medicina', Total: 245501 },
    { Ano: 2022, Curso: 'Gestão de pessoas', Total: 209766 }
];

// Função para inicializar as abas e o gráfico
function init() {
    const years = [...new Set(data.map(d => d.Ano))]; // Obtém os anos únicos
    const tabsContainer = d3.select('#tabs');

    // Cria as abas
    tabsContainer.selectAll('button')
        .data(years)
        .enter()
        .append('button')
        .text(d => d)
        .attr('class', 'tab')
        .on('click', function(event, d) {
            d3.selectAll('.tab').classed('active', false);
            d3.select(this).classed('active', true);
            updateChart(d);
        });

    // Ativa a primeira aba por padrão
    d3.select('.tab').classed('active', true);

    // Renderiza o gráfico para o primeiro ano
    updateChart(years[0]);
}

// Função para atualizar o gráfico com base no ano selecionado
function updateChart(selectedYear) {
    const filteredData = data.filter(d => d.Ano === selectedYear);

    // Define as dimensões do gráfico
    const margin = { top: 40, right: 20, bottom: 120, left: 60 },
          width = 800 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

    // Remove o gráfico anterior, se houver
    d3.select('#chart').select('svg').remove();

    // Cria o elemento SVG
    const svg = d3.select('#chart').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Configura as escalas
    const x = d3.scaleBand()
        .domain(filteredData.map(d => d.Curso))
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, d3.max(filteredData, d => d.Total)])
        .nice()
        .range([height, 0]);

    // Cria os eixos
    svg.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'rotate(-45)')
        .style('text-anchor', 'end');

    svg.append('g')
        .call(d3.axisLeft(y));

    // Cria as barras
    svg.selectAll('.bar')
        .data(filteredData)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.Curso))
        .attr('width', x.bandwidth())
        .attr('y', height)
        .attr('height', 0)
        .attr('fill', '#69b3a2')
        .transition()
        .duration(800)
        .attr('y', d => y(d.Total))
        .attr('height', d => height - y(d.Total));

    // Adiciona o título
    svg.append('text')
        .attr('x', width / 2 )
        .attr('y', -10)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .text(`Número de matrículas em ${selectedYear}`);
}

// Inicializa o gráfico
init();

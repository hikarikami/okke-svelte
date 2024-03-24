<script lang="ts">
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let chartContainer: HTMLCanvasElement;
  
    onMount(() => {
      const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
  
      // Generate random data for income and expenses
      const incomeData = Array.from({ length: 12 }, () => Math.round(Math.random() * 2750));
      const expenseData = Array.from({ length: 12 }, () => Math.round(Math.random() * -1000));
  
      const data = {
        labels: months,
        datasets: [
          {
            label: 'Income',
            data: incomeData,
            backgroundColor: '#50e991',
          },
          {
            label: 'Expenses',
            data: expenseData,
            backgroundColor: '#1e1b4b',
          },
        ],
      };


  
      const config = {
        type: 'bar',
        data,
        options: {
          scales: {
            x: {
              stacked: false,
            },
            y: {
              stacked: false,
              beginAtZero: true,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
        },
      };
  
      new Chart(chartContainer, config);
    });
  </script>
  
  <canvas height={100} bind:this={chartContainer}></canvas>
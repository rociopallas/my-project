<script>
  import Calendar from '@event-calendar/core';
  import TimeGrid from '@event-calendar/time-grid';
  import '@event-calendar/core/index.css';


  let collabArray = [
    { name: 'Rosa', isChecked: true },
    { name: 'José', isChecked: false },
    { name: 'Patricia', isChecked: false },
    { name: 'Raúl', isChecked: false }
  ];

  let plugins = [TimeGrid];
  let options = {
    view: 'timeGridWeek',
    locale: 'es',
    events: [
      // poner eventos: title, start, end.
      {
        title: 'Corte de pelo para hombre.\nCliente: Jorge Perez',
        start: '2023-11-15T13:00:00',
        end: '2023-11-15T14:00:00'
      },
      {
        title: 'Corte de pelo para mujer.\nCliente: Maria Hernandez',
        start: '2023-11-14T10:00:00',
        end: '2023-11-14T11:30:00'
      },
      {
        title: 'Corte de pelo para hombre.\nCliente: Alvaro Martinez',
        start: '2023-11-18T12:00:00',
        end: '2023-11-18T13:00:00'
      },
      {
        title: 'Corte de pelo para mujer.\nCliente: Juana Soza',
        start: '2023-11-15T14:00',
        end: '2023-11-15T15:30',
        backgroundColor: '#15faa7',
        textColor: 'black'
      },
      {
        title: 'Corte de pelo para mujer.\nCliente: Agustina Morales',
        start: '2023-11-14T11:30',
        end: '2023-11-14T13:00',
        backgroundColor: '#15faa7',
        textColor: 'black'
      },
      {
        title: 'Cerrado',
        start: '2023-11-12',
        end: '2023-11-12',
        backgroundColor: '#9f53ff'
      }
      
    ],
    eventBackgroundColor: '#7A8ADA',
    eventClassNames: ['iris_green', 'iris_blue', 'iris_purple', 'border', 'border-black', 'rounded-2xl',],
    nowIndicator: true,
    slotDuration: '00:30:00',
    allDayContent: 'Dia libre',
    noEventsContent: 'Aun no se ha agendado nadie',
    headerToolbar: {start: 'title', center: '', end: 'prev,next'}
  }

  let options1 = {
    view: 'timeGridWeek',
    locale: 'es',
    events: [
      // poner eventos: title, start, end.
      {
        title: 'Evento 4',
        start: '2023-11-15T08:00:00',
        end: '2023-11-15T14:00:00'
      },
      {
        title: 'Cerrado',
        start: '2023-11-19',
        end: '2023-11-19',
        backgroundColor: '#9f53ff'
      }
      
    ],
    eventBackgroundColor: '#7A8ADA',
    eventClassNames: ['iris_green', 'iris_blue', 'iris_purple', 'border', 'border-black', 'rounded-2xl'],
    nowIndicator: true,
    slotDuration: '00:30:00',
    allDayContent: 'Dia libre',
    noEventsContent: 'Aun no se ha agendado nadie',
    headerToolbar: {start: 'title', center: '', end: 'prev,next'}
  }

  let options2 = {
    view: 'timeGridWeek',
    locale: 'es',
    events: [
      // poner eventos: title, start, end.
      {
        title: 'Evento 2',
        start: '2023-11-06T14:00:00',
        end: '2023-11-06T17:00:00'
      },
      {
        title: 'Evento 3',
        start: '2023-11-08T08:00:00',
        end: '2023-11-08T15:00:00'
      },
      
    ],
    eventBackgroundColor: '#7A8ADA',
    eventClassNames: ['iris_green', 'iris_blue', 'iris_purple', 'border', 'border-black', 'rounded-2xl'],
    nowIndicator: true,
    slotDuration: '00:30:00',
    allDayContent: 'Dia libre',
    noEventsContent: 'Aun no se ha agendado nadie',
    headerToolbar: {start: 'title', center: '', end: 'prev,next'}
  }
  
  let options3 = {
    view: 'timeGridWeek',
    locale: 'es',
    events: [
      // poner eventos: title, start, end.
      {
        title: 'Evento 1',
        start: '2023-11-06T10:00:00',
        end: '2023-11-06T18:00:00'
      }
      
    ],
    eventBackgroundColor: '#7A8ADA',
    eventClassNames: ['iris_green', 'iris_blue', 'iris_purple', 'border', 'border-black', 'rounded-2xl'],
    nowIndicator: true,
    slotDuration: '00:30:00',
    allDayContent: 'Dia libre',
    noEventsContent: 'Aun no se ha agendado nadie',
    headerToolbar: {start: 'title', center: '', end: 'prev,next'}
  }

  let selectedCollaborator;
  // $: {
  //   console.log(selectedCollaborator);
  //   switch(selectedCollaborator) {
  //     case 'Colaborador 1':
  //       options.events = [
  //       {
  //       title: 'Evento 4',
  //       start: '2023-11-16T08:00:00',
  //       end: '2023-11-16T14:00:00'
  //     },
  //     {
  //       title: 'Descanso de Rosa',
  //       start: '2023-11-19',
  //       end: '2023-11-19',
  //       backgroundColor: '#9f53ff'
  //     }];
  //     break;
  //     case 'Colaborador 2':
  //       options.events = [
  //       {
  //       title: 'Evento 2',
  //       start: '2023-11-15T14:00:00',
  //       end: '2023-11-15T17:00:00'
  //     },
  //     {
  //       title: 'Evento 3',
  //       start: '2023-11-15T08:00:00',
  //       end: '2023-11-15T15:00:00'
  //     },];
  //     break;
  //     case 'Colaborador 3':
  //       options.events =[
  //         {
  //       title: 'Evento 1',
  //       start: '2023-11-17T10:00:00',
  //       end: '2023-11-17T18:00:00'
  //     }
  //       ];
  //       break;
  //   }
  //   console.log(options.events);
  //   console.log(options);
  // }
</script>
<div class='flex flex-col items-start mt-7 mb-36 '>
  <h1 class='text-4xl font-bold my-10 ml-5'>MI AGENDA</h1>
  <div class="flex flex-row justify-center items-center gap-5 w-full my-5 dark:text-white">
    {#each collabArray as collaborator}
    <div class="form-control">
      {#if collaborator.name === 'Rosa'}
      <label class="label cursor-pointer">
        <span class=" mr-2 font-semibold">{collaborator.name}</span> 
        <input 
        type="radio" 
        name="radio-10" 
        class="radio bg-white" 
        value={collaborator.name}
        checked
        />
      </label>
      {:else}
      <label class="label cursor-pointer">
        <span class=" mr-2 font-semibold">{collaborator.name}</span> 
        <input 
        type="radio" 
        name="radio-10" 
        class="radio bg-white"  
        value={collaborator.name}/>
      </label>
      {/if}
    </div>
    {/each}
  </div>
<div class="flex justify-center items-center w-full pr-10 gap-10 mx-5">

  <div class='justify-center items-center w-full'>
    <div class='bg-white ec-auto-dark text-black'>
      <Calendar {plugins} {options} />
      <!-- Display content based on the selected collaborator
      {#if selectedCollaborator === 'Colaborador 1'}
        <Calendar {plugins} {options} />
      {/if}
      {#if selectedCollaborator === 'Colaborador 2'}
        <Calendar {plugins} {options} />
      {/if}
      {#if selectedCollaborator === 'Colaborador 3'}
        <Calendar {plugins} {options} />
      {/if} -->
      
    </div>
  </div>
</div>
</div>
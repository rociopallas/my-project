<script>
  import Calendar from '@event-calendar/core';
  import TimeGrid from '@event-calendar/time-grid';
  import '@event-calendar/core/index.css';
  import CollabCheckbox from '../../../../components/CollabCheckbox.svelte';

  let collabArray = [
    { name: 'Colaborador 1', isChecked: true },
    { name: 'Colaborador 2', isChecked: false },
    { name: 'Colaborador 3', isChecked: false },
  ];

  let plugins = [TimeGrid];

  let options1 = {
    view: 'timeGridWeek',
    locale: 'es',
    events: [
      // poner eventos: title, start, end.
      {
        title: 'Evento 4',
        start: '2023-11-09T08:00:00',
        end: '2023-11-09T14:00:00'
      },
      {
        title: 'Descanso de Rosa',
        start: '2023-11-05',
        end: '2023-11-05',
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

  let selectedCollaborator = CollabCheckbox.selectedCollaborator;
  console.log(selectedCollaborator);
</script>

<div class="flex justify-center items-center w-full px-10 gap-10 mx-5">
  <div>
    {#each collabArray as collaborator}
      <CollabCheckbox
        collaboratorName={collaborator.name}
      />
    {/each}
  </div>
  <div class='justify-center items-center w-full'>
    <div class='bg-white ec-auto-dark text-black'>
      <!-- Display content based on the selected collaborator -->
      {#if selectedCollaborator === 'Colaborador 1'}
        <Calendar {plugins} {options1} />
      {/if}
      {#if selectedCollaborator === 'Colaborador 2'}
        <Calendar {plugins} {options2} />
      {/if}
      {#if selectedCollaborator === 'Colaborador 3'}
        <Calendar {plugins} {options3} />
      {/if}
      
    </div>
  </div>
</div>
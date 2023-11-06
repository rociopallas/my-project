<script>
  import Calendar from '@event-calendar/core';
  import TimeGrid from '@event-calendar/time-grid';
  import '@event-calendar/core/index.css';

  let hugo = {
    collaborator: 'Rosa',
    client: 'Hugo'
  }
  let plugins = [TimeGrid];

  let options = {
    view: 'timeGridWeek',
    locale: 'es',
    events: [
      // poner eventos: title, start, end.
      {
        title: 'Evento 1',
        start: '2023-11-06T10:00:00',
        end: '2023-11-06T18:00:00'
      },
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
</script>

<div class='flex flex-col h-full py-10 bg-white'>
  <div class=' flex flex-col w-1/4 justify-start items-center'>
      <h1 class='text-4xl font-semibold mb-5'>Mis agendas</h1>
  </div>
  <div class="flex justify-center items-center w-full px-10">
    <div class='justify-center items-center w-full'>
      <div class='bg-white ec-auto-dark text-black'>
      <Calendar {plugins} {options} />
      </div>
    </div>
  </div>
</div>
<script>
    import OpenDropdown from '../asset/OpenDropdown.png'
    let faqData = [
  { question: "¿Cómo agregar servicios?", answer: "Placeholder 1", open: false },
  { question: "¿Cómo agregar colaboradores?", answer: "Placeholder 2", open: false },
  { question: "¿Cómo se agendan los clientes?", answer: "Placeholder 3", open: false },
  { question: "¿Cómo ven mis colaboradores sus agendas?", answer: "Placeholder 4", open: false },
];
    let activeQuestion = null;
  
    function toggleAnswer(item) {
    item.open = !item.open;
  }
  </script>
  
  {#each faqData as item (item.question)}
  <div class="flex flex-row items-center justify-start gap-5" on:click={() => toggleAnswer(item)} on:keydown={() => toggleAnswer(item)} role="button" tabindex="0">
    <div class="text-xl my-5 border-y">{item.question}</div>
    <img src={OpenDropdown} alt="Abrir desplegable" class='h-5' />
    {#if item.open}
      <div class="answer">{item.answer}</div>
    {/if}
  </div>
{/each}
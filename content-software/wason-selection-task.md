---
title: Wason Selection Task
description: A simple interactive Wason selection task.
keywords: "Wason Selection Task, reasoning, psychology"
date: 2026-08-27
permalink: /software/wason-selection-task/
layout: layouts/default.njk
---

<style>
  :root {
    --wason-card-accent: #2f6f73;
    --wason-card-selected-bg: #cfe8e6;
  }

  [data-theme="dark"] {
    --wason-card-accent: #7fc7c4;
    --wason-card-selected-bg: #244746;
  }

  .task-panel {
    margin-top: 1rem;
    padding: 0.4rem clamp(1.25rem, 3vw, 2.5rem);
    background: var(--card-bg);
    border: 1px solid var(--border-color);
  }

  #rule-heading {
    margin: 0.8em 0;
  }

  .rule {
    padding: 1rem 1.15rem;
    border-left: 5px solid var(--action-button-primary-bg-hover);
    background: var(--bg-color);
    font-size: 110%;
    line-height: 1.35;
  }

  .instruction {
    margin: 1rem 0;
    line-height: 1.5;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    justify-items: center;
    gap: clamp(0.65rem, 2vw, 1rem);
    margin: 1.5rem 0 1.75rem;
  }

  .card {
    position: relative;
    display: flex;
    box-sizing: border-box;
    min-width: 0;
    max-width: 7em;
    width: 100%;
    align-items: center;
    justify-content: center;
    min-height: 9rem;    
    padding: 1rem;
    border: 2px solid var(--card-border-color);
    border-radius: 0.4em;
    background-color: #ddd !important;
    cursor: pointer;
    text-align: center;
    transition: border-color 160ms ease, transform 160ms ease, background 160ms ease;
  }

  .card:hover {
    border-color: var(--wason-card-accent);
    transform: translateY(-3px);
  }

  .card:focus-within {
    border-color: var(--wason-card-accent);
    outline: 3px solid var(--wason-card-accent);
    outline-offset: 3px;
  }

  .card:has(input:checked) {
    border-color: var(--wason-card-accent);
    background-color: var(--wason-card-selected-bg) !important;
    box-shadow: inset 0 -5px 0 var(--wason-card-accent);
  }

  [data-theme="dark"] .card:has(input:checked) {
    border-color: var(--wason-card-accent);
    background-color: var(--wason-card-selected-bg) !important;
    box-shadow: inset 0 -5px 0 var(--wason-card-accent);
  }

  .card input {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
  }

  .card-value {
    display: block;
    margin: 0;
    color: var(--heading-color);
    font: 700 clamp(2.4rem, 8vw, 4rem)/1 'Trebuchet MS', sans-serif;
  }

  [data-theme="dark"] .card {
    background-color: #3a3a3a !important;
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .actions button {
    border-radius: 1em;
  }

  .actions .action-button-primary {
    width: 10em;
    max-width: none;
    margin: 0 auto;
  }

  .actions button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .status {
    font: 0.9rem 'Trebuchet MS', sans-serif;
  }

  .result {
    margin-top: 2rem;
    padding: 1.25rem;
    border-top: 4px solid var(--action-button-primary-bg-hover);
    background: var(--bg-color);
    line-height: 1.6;
  }

  .result h2 {
    margin-bottom: 0.5rem;
    font-size: 1.45rem;
  }

  .result strong {
    color: var(--heading-color);
  }

  .result[hidden] {
    display: none;
  }

  .reference {
    margin-top: 2rem;
    font-size: 0.95rem;
  }

  .reference a {
    font-weight: 700;
  }

  @media (max-width: 540px) {
    .cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .card {
      min-height: 8.5rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .card {
      transition: none;
    }
  }
</style>

<main>
  <h1>{{ title }}</h1>
  <p>This is a simple puzzle to test your reasoning skills.</p>

  <section class="task-panel" aria-labelledby="rule-heading">
    <p class="instruction">There are four cards below, each with a letter on one side and a number on the other. Only select the cards you would need to turn over to determine whether this rule is true or false, then submit your answer.</p>
    <h2 id="rule-heading">The rule</h2>
    <p class="rule">If a card has an A on one side, then it has a 3 on the other side.</p>
    <form id="selection-form">
      <div class="cards" aria-label="Cards to inspect">
        <label class="card">
          <input type="checkbox" name="card" value="A">
          <span class="card-value">A</span>
        </label>
        <label class="card">
          <input type="checkbox" name="card" value="D">
          <span class="card-value">D</span>
        </label>
        <label class="card">
          <input type="checkbox" name="card" value="3">
          <span class="card-value">3</span>
        </label>
        <label class="card">
          <input type="checkbox" name="card" value="7">
          <span class="card-value">7</span>
        </label>
      </div>
      <div class="actions">
        <button id="submit-button" type="submit" class="action-button-primary" disabled>Submit</button>
        <span id="selection-status" class="status" aria-live="polite">Select at least one card.</span>
      </div>
    </form>

    <section id="result" class="result" hidden tabindex="-1" aria-labelledby="result-heading">
      <h2 id="result-heading"></h2>
      <p>
        <strong>A</strong> must be turned over because its reverse side must contain a 3 for the rule to be true. 
        <br><strong>7</strong> must be turned over because its reverse side must not contain an A; otherwise the rule is broken.
      </p>
      <p>
        <strong>D</strong> does not matter because the rule says nothing about D. 
        <br><strong>3</strong> does not matter either because the rule does not say that a 3 must have an A on its reverse side, it could be any letter.
      </p>
      <p class="reference">
        Learn more on <a href="https://en.wikipedia.org/wiki/Wason_selection_task" target="_blank" rel="noopener noreferrer">Wikipedia's Wason selection task page</a>.
      </p>
    </section>
  </section>
</main>

<script>
  const form = document.getElementById('selection-form');
  const submitButton = document.getElementById('submit-button');
  const selectionStatus = document.getElementById('selection-status');
  const result = document.getElementById('result');
  const resultHeading = document.getElementById('result-heading');
  const cards = [...form.querySelectorAll('input[name="card"]')];

  function updateSelectionState() {
    const selectedCount = cards.filter((card) => card.checked).length;
    submitButton.disabled = selectedCount === 0;
    selectionStatus.textContent = selectedCount === 0
      ? 'Select at least one card.'
      : `${selectedCount} card${selectedCount === 1 ? '' : 's'} selected.`;
  }

  cards.forEach((card) => card.addEventListener('change', updateSelectionState));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedCards = cards
      .filter((card) => card.checked)
      .map((card) => card.value)
      .sort();
    const correctCards = ['7', 'A'];
    const answerIsCorrect = selectedCards.length === correctCards.length
      && selectedCards.every((card, index) => card === correctCards[index]);

    resultHeading.innerHTML = answerIsCorrect
      ? 'Correct. You only need to turn over <strong>A and 7</strong>.'
      : 'The correct answer is <strong>A and 7</strong>.';
    result.hidden = false;
    result.focus();
  });
</script>

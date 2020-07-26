<script>

</script>

<style>
  form {
    --text-color: #afafaf;
    min-width: 500px;
  }

  .field {
    width: 100%;
    margin: 0 auto;
    position: relative;
    border-bottom: 2px dashed var(--text-color);
    margin: 4rem auto 1rem;
    transition: 500ms;
  }

  .label {
    color: var(--text-color);
    font-size: 1.2rem;
  }

  .input {
    outline: none;
    border: none;
    overflow: hidden;
    margin: 0;
    width: 100%;
    padding: 0.25rem 0;
    background: none;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
  }

  .input:valid {
    color: yellowgreen;
  }

  .input:invalid {
    color: orangered;
  }
</style>

<main>
  <form>
    <div class="field">
      <input type="email" name="email" class="input" placeholder="" />
      <label for="email" class="label">Email</label>
    </div>
    <div class="field">
      <input type="password" name="email" class="input" placeholder="" />
      <label for="password" class="label">Password</label>
    </div>
  </form>
</main>

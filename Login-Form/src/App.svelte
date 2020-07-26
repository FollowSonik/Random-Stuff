<script>

</script>

<style>
  form {
    --text-color: #afafaf;
    min-width: 500px;
  }

  .field {
    width: 100%;
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

  .field::after {
    content: '';
    position: relative;
    display: block;
    height: 4px;
    width: 100%;
    background: #d16dff;
    transform: scaleX(0);
    transform-origin: 0%;
    transition: all 500ms ease;
    top: 2px;
  }

  .field:focus-within {
    border-color: transparent;
  }

  .field:focus-within::after {
    transform: scaleX(1);
  }

  .label {
    z-index: -1;
    position: relative;
    transform: translateY(-2rem);
    transform-origin: 0%;
    transition: transform 400ms;
  }

  .field:focus-within .label,
  .input:not(:placeholder-shown) + .label {
    transform: scale(0.8) translateY(-5rem);
  }
</style>

<main>
  <form>
    <div class="field">
      <input type="email" name="email" class="input" placeholder=" " />
      <label for="email" class="label">Email</label>
    </div>
    <div class="field">
      <input type="password" name="email" class="input" placeholder=" " />
      <label for="password" class="label">Password</label>
    </div>
    <div class="strength">
      <span class="bar bar-1" />
      <span class="bar bar-2" />
      <span class="bar bar-3" />
      <span class="bar bar-4" />
    </div>
    <ul>
      <li>Must be at least 5 characters</li>
      <li>Must contain a capital letter</li>
      <li>Must contain a number</li>
      <li>Must contain one of $&+,:;=?@#</li>
    </ul>
  </form>
</main>

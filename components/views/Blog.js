import { capitalize } from "lodash";

export default () =>
  `
    <section id="Blog">
        <h1>Thank you for visiting my site!</h1>
        <h2>Please leave me a comment about your experience below. Your comments
        will be posted to this page when you hit enter.</h2>
        <textfield>
          <textarea type ="text" id="text" rows="10" cols="100"></textarea>
        </textfield>
        <div>
          <button><a href="#Post"></a>Enter</button>
        </div>
    </section>
`;

import React from "react";
import * as firebase from "../../../node_modules/firebase/app"
import "../../../node_modules/firebase/auth"

function Login(){
    const [email, setEmail] = useState("");
    return(
        <form>
            <div class="mb-3">
                <label for="Email" class="form-label">Email</label>
                <input type="deliveremail" class="form-control" id="Email" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">Tu informacion no sera compartida con nadie.</div>
            </div>
            <div class="mb-3">
                <label for="contra" class="form-label">Contraseña</label>
                <input type="contraseña" class="form-control" id="contra"/>
            </div>
            <div class="mb-3-check">
                <input type="checkbox" class="form-check-input" id="check"/>
                <label class="checklabel" for="check">Recuerdame</label>
            </div>
            <button type="submit" class="btn">Enviar</button>
        </form>
    )

}
export default Login;
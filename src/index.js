import { BlogPost, Tarjeta } from './tarea/Tarea1.js'
import { MatchNombre, PasswordInput, ValidationInput } from './tarea/Tarea2.js';
import { UncontrolledCheckbox, CheckboxList} from './tarea/Tarea3.js'
import { ControlledCheckbox, CheckboxListWithState } from './tarea/Tarea4.js'

ReactDOM.render(
    <>
        {/* TAREA 1 */}
        <Tarjeta
        nombre="David Morales"
        titulo="Futuro FullStack dev"
        imagen="https://avatars.githubusercontent.com/u/105241040?s=400&u=4c2e941ddd9b4abeb6b5c9dad0f4ec818c45219c&v=4"
        />
    
        <BlogPost
        titulo="Ardillas"
        parrafos={`Hoy vi una ardilla.
                    La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
                    Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
        autor={{
            nombre: "David Morales",
            titulo: "Futuro FullStack dev",
            imagen: "https://avatars.githubusercontent.com/u/105241040?s=400&u=4c2e941ddd9b4abeb6b5c9dad0f4ec818c45219c&v=4"
        }}
        />

        {/* TAREA 2 */}
        <h3>Tarea 2</h3>
        <MatchNombre nombre="david" />
        <PasswordInput minLength="8" />
        <ValidationInput validation={(value) => !value.match(" ")} isPassword={true} />

        {/* TAREA 3 */}
        <h3>Tarea 3</h3>
        <UncontrolledCheckbox initialValue={false} nombre="Checkbox 1" />
        <CheckboxList items={{ uno: true, dos: true, tres: false }} />

        {/* TAREA 4 */}
        <h3>Tarea 4</h3>
        <ControlledCheckbox name="ControlledCheckbox Original" value={true} onChange />
        <CheckboxListWithState items={{ uno: false, dos: true, tres: false }} />


</>, document.getElementById('react-app'));




//import { Welcome } from './components/Welcome.js';

//ReactDOM.render(<Welcome nombre="Julián" />, document.getElementById('react-app'));

// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));

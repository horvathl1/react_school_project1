function AppComponent(){
    return <h1>OK</h1>;
}

function HeaderComponent(){
    return <nav>HEADER</nav>
}

function App(){
    const [isActive, setActive]= React.useState(false);
    return <div className='border'>
        Teszt React App
        <BoxComponent isActive={isActive}></BoxComponent>
        <ButtonComponent isActive={isActive} setActive={setActive}></ButtonComponent>
        App szintű state:{isActive? 'Aktív' : 'Inaktív'}

    </div>;
}

function ButtonComponent({isActive,setActive}){
    return <div 
    style={{width:'200px', height: '200px'}}
    className='p-2 m-5 rounded'>
        <button className='btn btn-success m-2' 
        disabled={isActive} 
        onClick={()=>{setActive(true)}} >
            Aktiválás
        </button>
        <button className='btn btn-danger m-2' 
        disabled={!isActive} 
        onClick={()=>{setActive(false)}} >
            Deaktiválás
        </button>
    </div>;
}

function BoxComponent(props){
    return <div
    style={{width:'200px', height:'200px', backgroundColor:props.isActive? 'green':'firebrick'}}
    className='p-2 m-5 rounded'>
        {props.isActive? 'Aktív':'Inaktív'}
    </div>;
}

ReactDOM.render(
    React.createElement(App),document.getElementById('app-container')
    
)

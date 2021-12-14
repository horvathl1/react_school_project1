var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function AppComponent() {
    return React.createElement(
        'h1',
        null,
        'OK'
    );
}

function HeaderComponent() {
    return React.createElement(
        'nav',
        null,
        'HEADER'
    );
}

function App() {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        isActive = _React$useState2[0],
        setActive = _React$useState2[1];

    return React.createElement(
        'div',
        { className: 'border' },
        'Teszt React App',
        React.createElement(BoxComponent, { isActive: isActive }),
        React.createElement(ButtonComponent, { isActive: isActive, setActive: setActive }),
        'App szint\u0171 state:',
        isActive ? 'Aktív' : 'Inaktív'
    );
}

function ButtonComponent(_ref) {
    var isActive = _ref.isActive,
        setActive = _ref.setActive;

    return React.createElement(
        'div',
        {
            style: { width: '200px', height: '200px' },
            className: 'p-2 m-5 rounded' },
        React.createElement(
            'button',
            { className: 'btn btn-success m-2',
                disabled: isActive,
                onClick: function onClick() {
                    setActive(true);
                } },
            'Aktiv\xE1l\xE1s'
        ),
        React.createElement(
            'button',
            { className: 'btn btn-danger m-2',
                disabled: !isActive,
                onClick: function onClick() {
                    setActive(false);
                } },
            'Deaktiv\xE1l\xE1s'
        )
    );
}

function BoxComponent(props) {
    return React.createElement(
        'div',
        {
            style: { width: '200px', height: '200px', backgroundColor: props.isActive ? 'green' : 'firebrick' },
            className: 'p-2 m-5 rounded' },
        props.isActive ? 'Aktív' : 'Inaktív'
    );
}

ReactDOM.render(React.createElement(App), document.getElementById('app-container'));
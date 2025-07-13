

const style = {
    paddingLeft: "var(--sapContent_Space_S)", 
    paddingRight: "var(--sapContent_Space_S)" 
}
export const SayHi = () =>{
    return (
        <div style={style}>
        <h1>Hello, UI5 Web Components for React!</h1>
        <p>Welcome to your first component.</p>
        </div>
    );
}

export default SayHi;
export const Main = () => {

    const user = {
        name: "Isabel",
        age: 26
    }
    const styles = {
        color: "purple"
    }
    return(
        <>
        <h1 style={styles}>{user.name} tiene {user.age}</h1>
        
        </> 
    )
}

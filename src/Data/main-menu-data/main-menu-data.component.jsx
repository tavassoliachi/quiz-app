import './main-menu-data.styles.css'
const MainMenuData = () =>(
    <div className='main-menu-data'>
        <h1 className='title'>Main Menu</h1>
        <span>Choose Quiz Difficulty</span>
    <select id="difficulty" name="difficulty">
        <option value="easy">Easy</option>
        <option value="medium" selected>Medium</option>
        <option value="hard">Hard</option>
    </select>
    <span>Choose Quiz Category</span>
    <select id="category" name="category">
        <option value="20">Mythology</option>
        <option value="23">History</option>
        <option value="21" selected>Sports</option>
    </select>
    </div>
)
export default MainMenuData;
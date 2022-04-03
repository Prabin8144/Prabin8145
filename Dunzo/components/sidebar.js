function sidebar(){
    return `
    <div id="contTop">
        <div class="topDiv">
            <h1>hey There!</h1>
            <div id="ageVerify">Verify your age to order Paan items </div>
            
                <div class="btn">
                    <button id="editbtn">Edit Profile</button>
                    <button id="logout">Logout</button>
                </div>
           
            
        </div>
      
            
    </div>
    <div class="container">
        

        <div class="sidebar">
            <ul>
                <li>
                    <a href="orderList.html">
                        <span class="title">Orders List</span>
                    </a>
                </li>
            </ul>    
            <ul>
                <li>
                    <a href="Adresses.html">
                        <span class="title">Addresses</span>
                    </a>
                </li>

            </ul>    
                
            <ul>
                <li>
                    <a href="accountSetting.html">
                        <span class="title">Account Setting</span>
                    </a>
                </li>
            </ul>
                
            <ul>
                <li>
                    <a href="manage-payment.html">
                        <span class="title">Manage Payments</span>
                    </a>
                </li>
            </ul>
                
            <ul>
                <li>
                    <a href="dunzo-cash.html">
                        <span class="title">Dunzo Cash</span>
                    </a>
                </li>

            </ul>
                
            <ul>
                <li>
                    <a href="#">
                        <span class="title">Support</span>
                    </a>
                </li>
            </ul>
                
            <ul>
                <li>
                    <a href="#">
                        <span class="title">About</span>
                    </a>
                </li>
            </ul>
                

         

        </div>
        <div id="pgTop"></div>
        <div id="pgdata"></div>
    </div>


`
}
export default sidebar;
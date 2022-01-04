

const Sidebar = () => {
    
    
    return ( 
        <div class="sidebar">
    <div class="logo-details">
      <i class='bx bxl-git icon' ></i>
        <div class="logo_name">EVENTKOTO</div>
        <i class='bx bx-menu' id="btn" ></i>
    </div>
    <ul class="nav-list">
      <li>
          <i class='bx bx-search' ></i>
         <input type="text" placeholder="Search..." />
         <span class="tooltip">Search</span>
      </li>
      <li>
        <a href="#">
          <i class='bx bx-home-alt' ></i>
          <span class="links_name">Dashboard</span>
        </a>
         <span class="tooltip">Dashboard</span>
      </li>
      <li>
       <a href="#">
         <i class='bx bx-calendar' ></i>
         <span class="links_name">Calendar</span>
       </a>
       <span class="tooltip">Calendar</span>
     </li> 
     <li>
       <a href="#">
         <i class='bx bx-user' ></i>
         <span class="links_name">User Profile</span>
       </a>
       <span class="tooltip">User Profile</span>
     </li>

     <li class="profile">
         <div class="profile-details">
           <div class="name_job">
             <div class="name">Event yarn</div>
             <div class="job">All-in-one Events</div>
           </div>
         </div>
         <a href="index.html" id="log_out"><i class='bx bx-log-out' id="log_out" ></i></a>
     </li>
    </ul>
  </div>
     );

 
     
}

 

export default Sidebar;
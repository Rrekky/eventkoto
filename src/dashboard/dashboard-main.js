import banner from "../images/banner.png"

const DashboardMain = () => {
    return ( 
        <div className="banner-slider">
            <div class="banner-slides">
            <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3"/>
        <input type="radio" name="radio-btn" id="radio4"/>
        {/*  */}
        <div class="banner-slide first">
                <img src={banner}/>
            </div>
            <div class="banner-slide">
                <img src={banner}/>
            </div>
            <div class="banner-slide">
                <img src={banner}/>
            </div>
            <div class="banner-slide">
                <img src={banner} />
            </div>
        {/*  */}
        <div class="nav-manual">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
            <label for="radio4" class="manual-btn"></label>
        </div>
      </div>
        </div>

     );
}
 
export default DashboardMain;
import React from 'react'
import './DemoPage.scss'

const DemoPage = () => {
    return (
        <div class="demo-form-container">
            <h2 class="form-heading">Request a Demo Now</h2>
            <form class="demo-form">
                <div class="form-row">
                    <div class="form-group">
                        <input type="email" id="email" name="email" placeholder="Email" required></input>
                    </div>
                    <div class="form-group">
                        <input type="tel" id="phone" name="phone" placeholder="Phone" required></input>
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" id="company-name" name="company-name" placeholder="Company Name" required></input>
                </div>
                <div class="form-group">
                    <select id="company-size" name="company-size" required>
                        <option value="" disabled selected >Company Size</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="500+">500+</option>
                    </select>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <input type="date" id="date-slot" name="date-slot"></input>
                        {/* <small>*optional</small>  */}
                    </div>
                    <div class="form-group">
                        <input type="time" id="time-slot" name="time-slot"></input>
                        {/* <small>*optional</small> */}
                    </div>
                </div>
                <div class="form-message">
                    <textarea id="message" name="message" placeholder="Message"></textarea>
                    <button type="submit" class="submit-button">Request</button>
                </div>
            </form>
        </div>
    )
}

export default DemoPage
import React from "react";
import { Image } from "react-bootstrap";

function Content(){

    return(
        <div>
            <section>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="Images/banner.jpg" alt="First slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
            </section>
            <section class="bg-light" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12">
                            <h3 class="text-center mt-4 text-secondary">Know Aboutus</h3>
                        </div>
                    </div>
                    <div class="row">
                       <p class="mt-4 mb-5">Eventraa events is a event planning company specialising in event design and parties of all kind within affordable budget. 
                       You are the dreamers and we are the planners we make plans to fillfill your dreams .
                        We work collaboratively to ensure your event is cohesive and thoughtful . I assure that Eventraa events will be your stepping stones of creating a world of your own .
                        We have all kind of services like birthday parties ,surprise party and photo shoot for customer friendly prices . When Eventraa events  plan a event people don't remember the days but rather the golden moments created by eventraa planners.</p>
                       <p> There is no path of happiness but eventraa events is a path to create happiness. Our events make our costumers enjoy every little things in life and spread happiness to you and your loved ones. </p>    
                       <p>Our main dream is to spread happiness over the world.</p> 
                    </div>   
                </div>
            </section>

            <section class="" id="services">   
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Our Services</h3>
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/ig1.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">birthday Events</h4>
                          <p class="card-text text-secondary">Birthday is a day that occurs once in a year in everyone’s life. This day commences with several warm wishes of ‘Happy birthday to you’ by our close ones after the clock strikes 12:00 in the night. Everybody on their birthdays feels that this is their own day and they are free to do anything. It is the day when nobody scolds us. We get only love and blessing on our birthdays. Our family, friends and relatives try to do something special for us on this day that would please us from inside.</p>
                           <p class="card-text text-secondary">Most importantly, birthdays call for celebration. It is one day where we get to see all our loved ones in one place. No one can make an excuse and you get to spend time with everyone you love under one roof, it is nothing sort of magical.</p>
                       </div>
                    </div>
                 </div>

                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/ig2.jpg" alt="" style={{height:"200px"}}/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">surprise Events</h4>
                          <p class="card-text text-secondary">Throwing a surprise birthday party for someone is not an easy task, it takes patience and planning. Surprise parties are usually thrown for friends and family usually on birthdays or accomplishments and are pretty fun to participate in. In this event everyone is aware of it except for the person the surprise party is being thrown for. Planning for these types of events can be a little hectic but the ending result it’s usually priceless. Money is not matter infront of happiness through surprises. </p>
                          <p class="card-texr text-secondary">Once if you surprise anyone with great surprise then they will not forget about it until they die. So , surprise is a type of giving happines for our loved ones.</p>
                          <p class="card-text text-secondary"> ! Spread happiness with surprises !</p>
                       </div>
                    </div>
                 </div>

                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/ig3.jpg" alt="" style={{height:"200px"}}/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Photoshoot</h4>
                          <p class="card-text text-secondary"> photoshoot provides a number of stunning images. You can use them as a wall-decors in your room. They will stand out among the rest of your usual wedding ,birthday , Events pictures.Nowadays, wedding photography is not just about posing and smiling.  One photograph is powerful enough to not only remind you of an event or detail, but can bring you right back to the feelings, sounds, and even smells of the moment.</p>
                          <p class="card-text text-secondary">Pre wedding shoots is a fairly new trend originating from Asia.Pre-wedding photography is a growing trend where engaged couples decide to have professional photos taken in a special location before their wedding day Pre-wedding culture is growing like anything in Telangana and Andhra Pradesh. </p>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  

       <section class="bg-light" id="contactus"> 
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12">
                    <h3 class="text-center mt-4 text-secondary">Contact us</h3>
                </div>
                <br></br>
                <br></br>
                <div class="col-md-4">
                 <div class="testimonial mb-5">
                  <div class="avatar mx-auto">
                      <h6 class="text-secondary">Phone number: +91-9902198139</h6>
                      <h6 class="text-secondary">Email: eventraaevents@gmail.com</h6>
                  </div>
                  <br>
                  </br>
                  <div class="col-md-4">
                      <div class="testimonial mb-5">
                          <h6 class="text-secondary">Location: <br></br>Kengeri,Bangalore,
                          <p>Karnataka, 560060</p></h6>
                      </div>
                  </div>

                  <div class="col-md-4">
                      <div class="testimonial mb-5">
                          <h6 class="text-secondary">Follow us on: <br></br> <br></br><a href="https://www.instagram.com/eventraa.events/"><img class="d-block w-10" src="Images/insta.png" alt="" style={{height:"40px"}}/></a>
                          </h6>
                      </div>
                  </div>
                 </div>
                </div>
            </div>
        </div>
       </section>
        </div>
    )
}

export default Content;
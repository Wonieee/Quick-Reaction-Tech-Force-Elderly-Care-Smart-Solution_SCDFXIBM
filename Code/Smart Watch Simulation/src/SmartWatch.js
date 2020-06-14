import React from 'react';
import "./SmartWatch.css";

class ShoppingList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: window.moment(),
      heart_rate: 0,
      heart_attack_start_time: null,
      is_heart_attack: false
    }

    this.normal_heart_rate_min = 60
    this.normal_heart_rate_max = 80

    this.walking_heart_rate_min = 80
    this.walking_heart_rate_max = 100

    this.abnormal_heart_rate_min = 100
    this.abnormal_heart_rate_max = 120

    this.heart_rate_min = this.normal_heart_rate_min
    this.heart_rate_max = this.normal_heart_rate_max

    this.timer = setInterval(() => this.setState({
      time: window.moment()
    }), 1);

    this.timer2 = setInterval(() => {
      this.setState({
        heart_rate: this.random(this.heart_rate_min, this.heart_rate_max)
      })
    }, 1000);
  }

  random = (min, max) => {
      return Math.round((Math.random() *( Math.abs(max - min))) + min);
  }

  send_data = () => {
    let url = ""
    let data = {
      heart_date: 101
    }
    let fetchData = {
      method: 'POST',
      body: data
    }
    fetch(url, fetchData)
    .then((resp) => resp.json()) // Transform the data into json
    .then((data) => {
    // Create and append the li's to the ul
    })
    .catch(function() {
        // This is where you run code if the server returns any errors
    });
  }

  download_csv = () => {
    let start_time = window.moment();
    function random(min, max) {
        return Math.round((Math.random() *( Math.abs(max - min))) + min);
    }
    let data_list = []

    for (let person_id = 1; person_id < 10; person_id++) {
      let random_time = random(1, 60)
      let motion_status = random(1, 10)
      
      for (let i = 0; i < 60; i++) {
        let date = start_time.add(1, 'minutes')
        let heart_rate = random(this.normal_heart_rate_min, this.normal_heart_rate_max)
        let is_heart_attack = false

        if(is_heart_attack === false) {
          motion_status += random(-1, 1)
        }

        if(motion_status >= 10) {
          motion_status = 10
        } else if(motion_status <= 0) {
          motion_status = 0
        }
        
        if(i > random_time && motion_status <= 4) {
          heart_rate = random(this.abnormal_heart_rate_min, this.abnormal_heart_rate_max)
          is_heart_attack = true
          if(motion_status > 4) {
            motion_status = 4
            motion_status += random(-1, 0)
          }
          
        }

        let data = {
          "id": person_id,
          "heart_rate": heart_rate,
          "date": date.format('YYYY-DD-MM'),
          "time": date.format('HH:mm:ss'),
          "motion_status": motion_status,
          "is_heart_attack": is_heart_attack
        }
        data_list.push(data)
      }
    }
    
    let data_header = ["id", "heart_rate", "date", "time", "motion_status", "is_heart_attack"]
    
    function JsonToCSV(){
        var csvStr = data_header.join(",") + "\n";
    
        data_list.forEach(element => {
          let id = element.id
          let heart_rate = element.heart_rate;
          let date   = element.date;
          let time   = element.time;
          let motion_status = element.motion_status;
          let is_heart_attack   = element.is_heart_attack;

          csvStr += id + "," + heart_rate + ',' + date + "," + time + "," + motion_status + "," + is_heart_attack + "\n";
        })
        return csvStr;
    }

    let csvStr = JsonToCSV()

    function downloadCSV(csvStr) {

        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvStr);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'output.csv';
        hiddenElement.click();
    }

    downloadCSV(csvStr)
  }

  get_watch() {
    return(
      <>
        <div class="text-center">
          <div id="watch_id" class="watch">
            <div class="top_band"></div>
            <div class="watch_face">
              <div class="watch_display">
                <div class="screen_time">
                  <br/>
                  <br/>
                  <span style={{fontSize: "2em"}}>
                    {this.state.time.format('h:mm:ss a')}
                  </span>
                  <br/>
                  {"Heart Rate: " + this.state.heart_rate}
                </div>

              </div>
            </div>
            <div class="bottom_band"></div>
          </div>
        </div>

        <div style={{margin: "auto", width: "45%"}}>
          <div class="row">
            <div class="col-sm-4">
            <button type="button" class="btn btn-warning" style={{margin: "20px", backgroundColor: "#79C53A"}} onClick={() => {
              this.heart_rate_min = this.abnormal_heart_rate_min
              this.heart_rate_max = this.abnormal_heart_rate_max
              //alert("Heart attack :(")
              var links = document.getElementById("watch_id")
              links.focus();
            }}>Simulate Heart Attack</button>
            </div>
            <div class="col-sm-4">
            <button type="button" class="btn btn-warning" style={{margin: "20px", backgroundColor: "#79C53A"}} onClick={() => {
              this.heart_rate_min = this.normal_heart_rate_min
              this.heart_rate_max = this.normal_heart_rate_max
              //alert("Heart attack :(")
            }}>Recover from Heart Attack</button>
            </div>
            <div class="col-sm-4">
            <button type="button" class="btn btn-warning" style={{margin: "20px", backgroundColor: "#79C53A"}} onClick={() => {
              this.download_csv()
              //alert("Heart attack :(")
            }}>Download CSV</button>
            </div>
          </div>
        </div>

        
      
        
        

      </>
    )
  }

  render() {
    return (
      <div>
        {
          this.get_watch()
        }
      </div>
    );
  }
}
  
  export default ShoppingList;
  // Example usage: <ShoppingList name="Mark" />
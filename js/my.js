var input1, input2;
input1 = prompt("Month 1-12")
input2 = prompt("Start Day 1-7")
function Calendar(element, month, day) {
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let mname = ''
  if (month == 1)
    mname = 'January'
  else if (month == 2)
    mname = 'February'
  else if (month == 3)
    mname = 'March'
  else if (month == 4)
    mname = 'April'
  else if (month == 5)
    mname = 'May'
  else if (month == 6)
    mname = 'June'
  else if (month == 7)
    mname = 'July'
  else if (month == 8)
    mname = 'August'
  else if (month == 9)
    mname = 'September'
  else if (month == 10)
    mname = 'October'
  else if (month == 11)
    mname = 'November'
  else if (month == 12)
    mname = 'December'
  else {
    mname = "Invalid Input"
}
let creater = `<table><tr><td colspan = "7" align = "center" id="month" font-style = "italic">${mname}</tr></td><tr><th style="background-color: red;">Sun</th><th>Mon</th><th>Tues</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>`
let adder = 1
let cDays = 1
let wCounter = 0
if(month > 12 || day > 7){
  element.innerHTML = ("<h1>Invalid Input</h1>")
}
else if(month == 0 || day == 0)
  element.innerHTML = ("<h1>Invalid Input</h1>")
  else{
    if(days[month-1] == 31){
      if(day >= 6){
                for (let i = 0; i < 42; i++) {
                    if (wCounter == 0) {
                        creater += '<tr>'
                    }
                    if (adder <= day - 1) {
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                            adder++
                        }else{
                            creater += "<td></td>"
                            adder++
                        }
                    }
                    else if (cDays > days[month - 1]){
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                        }else
                            creater += "<td></td>"
                    }
                    else {
                        if (cDays <= days[month - 1]) {
                            if(wCounter == 0){
                                creater += `<td style="background-color: red;">${cDays}</td>`
                                cDays++
                            }else{
                                creater += `<td>${cDays}</td>`
                                cDays++
                            }
                        }
                        else
                            creater += "<td></td>"
                    }
                    if (wCounter == 6) {
                        creater += '</tr>'
                        wCounter = 0
                    }
                    else {
                        wCounter++
                    }
                }
            }
            else{
                for (let i = 0; i < 35; i++) {
                    if (wCounter == 0) {
                        creater += '<tr>'
                    }
            
                    if (adder <= day - 1) {
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                            adder++
                        }else{
                            creater += "<td></td>"
                            adder++
                        }
                    }
                    else if (cDays > days[month - 1]){
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                        }else
                            creater += "<td></td>"
                    }
                    else {
                        if (cDays <= days[month - 1]) {
                            if(wCounter == 0){
                                creater += `<td style="background-color: red;">${cDays}</td>`
                                cDays++
                            }else{
                                creater += `<td>${cDays}</td>`
                                cDays++
                            }
                        }
                        else
                            creater += "<td></td>"
                    }
            
                    if (wCounter == 6) {
                        creater += '</tr>'
                        wCounter = 0
                    }
                    else {
                        wCounter++
                    }
                }
            }
        }else if(days[month-1] == 28){
            if(day >= 2){
            for (let i = 0; i < 35; i++) {
                if (wCounter == 0) {
                    creater += '<tr>'
                }
                if (adder <= day - 1) {
                    if(wCounter == 0){
                        creater += '<td style="background-color: red;"></td>'
                        adder++
                    }else{
                        creater += "<td></td>"
                        adder++
                    }
                }
                else if (cDays > days[month - 1]){
                    if(wCounter == 0){
                        creater += '<td style="background-color: red;"></td>'
                    }else
                        creater += "<td></td>"
                }    
                else {
                    if (cDays <= days[month - 1]) {
                        if(wCounter == 0){
                            creater += `<td style="background-color: red;">${cDays}</td>`
                            cDays++
                        }else{
                            creater += `<td>${cDays}</td>`
                            cDays++
                        }
                    }
                    else
                        creater += "<td></td>"
                }
                if (wCounter == 6) {
                    creater += '</tr>'
                    wCounter = 0
                }
                else {
                    wCounter++
                }
            }
            }else{
            for (let i = 0; i < 28; i++) {
                if (wCounter == 0) {
                    creater += '<tr>'
                }
                if (adder <= day - 1) {
                    if(wCounter == 0){
                        creater += '<td style="background-color: red;"></td>'
                        adder++
                    }else{
                        creater += "<td></td>"
                        adder++
                    }
                }
                else if (cDays > days[month - 1]){
                    if(wCounter == 0){
                        creater += '<td style="background-color: red;"></td>'
                    }else
                        creater += "<td></td>"
                }
                else {
                    if (cDays <= days[month - 1]) {
                        if(wCounter == 0){
                            creater += `<td style="background-color: red;">${cDays}</td>`
                            cDays++
                        }else{
                            creater += `<td>${cDays}</td>`
                            cDays++
                        }
                    }
                    else
                        creater += "<td></td>"
                }
                if (wCounter == 6) {
                    creater += '</tr>'
                    wCounter = 0
                }
                else {
                    wCounter++
                }
            }
        }
        }else if(days[month-1] == 30){
            if(day > 6){
                for (let i = 0; i < 42; i++) {
                    if (wCounter == 0) {
                        creater += '<tr>'
                    }
            
                    if (adder <= day - 1) {
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                            adder++
                        }else{
                            creater += "<td></td>"
                            adder++
                        }
                    }
                    else if (cDays > days[month - 1]){
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                        }else
                            creater += "<td></td>"
                    }
                    else {
                        if (cDays <= days[month - 1]) {
                            if(wCounter == 0){
                                creater += `<td style="background-color: red;">${cDays}</td>`
                                cDays++
                            }else{
                                creater += `<td>${cDays}</td>`
                                cDays++
                            }
                        }
                        else
                            creater += "<td></td>"
                    }
                    if (wCounter == 6) {
                        creater += '</tr>'
                        wCounter = 0
                    }
                    else {
                        wCounter++
                    }
                }
            }else{
                for (let i = 0; i < 35; i++) {
                    if (wCounter == 0) {
                        creater += '<tr>'
                    }
                    if (adder <= day - 1) {
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                            adder++
                        }else{
                            creater += "<td></td>"
                            adder++
                        }
                    }
                    else if (cDays > days[month - 1]){
                        if(wCounter == 0){
                            creater += '<td style="background-color: red;"></td>'
                        }else
                            creater += "<td></td>"
                    }
                    else {
                        if (cDays <= days[month - 1]) {
                            if(wCounter == 0){
                                creater += `<td style="background-color: red;">${cDays}</td>`
                                cDays++
                            }else{
                                creater += `<td>${cDays}</td>`
                                cDays++
                            }
                        }
                        else
                            creater += "<td></td>"
                    }
                    if (wCounter == 6) {
                        creater += '</tr>'
                        wCounter = 0
                    }
                    else {
                        wCounter++
                    }
                }
            }
        }
        creater += '</table>'
    
        element.innerHTML = creater;
        }
    }
Calendar(H1, input1, input2)
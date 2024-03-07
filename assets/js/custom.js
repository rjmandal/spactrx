$(document).ready(function () {
  //show hide div on selection
  $("#myselection").on("change", function () {
    var value = $(this).val();
    if (value == "hospital") {
      $(".Hospitalview").show(500);
      $(".centerview").hide(500);
    } else {
      $(".centerview").show(500);
      $(".Hospitalview").hide(500);
    }
  });

  //scroll to top button

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function () {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  }); // click() scroll top EMm

  // add or remove button for proffesionals

  $(".wrapper").on("click", ".remove", function () {
    $(".remove")
      .closest(".wrapper")
      .find(".element")
      .not(":first")
      .last()
      .remove();
    if ($(".element").length == 1) {
      $(".remove").hide(500);
      $(".clone").prop("disabled", false);
    }
  });

  $(".wrapper").on("click", ".clone", function () {
    $(".remove").show(500);
    $(".clone")
      .closest(".wrapper")
      .find(".element")
      .first()
      .clone()
      .appendTo(".results");
  });

  $(".wrapper1").on("click", ".remove1", function () {
    $(".remove1")
      .closest(".wrapper1")
      .find(".element1")
      .not(":first")
      .last()
      .remove();
    if ($(".element1").length == 1) {
      $(".remove1").hide(500);
      $(".clone1").prop("disabled", false);
    }
  });

  $(".wrapper1").on("click", ".clone1", function () {
    $(".remove1").show(500);
    $(".clone1")
      .closest(".wrapper1")
      .find(".element1")
      .first()
      .clone()
      .appendTo(".results1");
  });

  $(".wrapper2").on("click", ".remove2", function () {
    $(".remove2")
      .closest(".wrapper2")
      .find(".element2")
      .not(":first")
      .last()
      .remove();
    if ($(".element2").length == 1) {
      $(".remove2").hide(500);
      $(".clone2").prop("disabled", false);
    }
  });

  $(".wrapper2").on("click", ".clone2", function () {
    $(".remove2").show(500);
    $(".clone2")
      .closest(".wrapper2")
      .find(".element2")
      .first()
      .clone()
      .appendTo(".results2");
  });

  $(".wrapper3").on("click", ".remove3", function () {
    $(".remove3")
      .closest(".wrapper3")
      .find(".element3")
      .not(":first")
      .last()
      .remove();
    if ($(".element3").length == 1) {
      $(".remove3").hide(500);
      $(".clone3").prop("disabled", false);
    }
  });

  $(".wrapper3").on("click", ".clone3", function () {
    $(".remove3").show(500);
    $(".clone3")
      .closest(".wrapper3")
      .find(".element3")
      .first()
      .clone()
      .appendTo(".results3");
  });

  // add or remove button for proffesionals close

  $(".customtoggle").click(function () {
    if ($(this).is(":checked")) {
      $(".navbar").css({
        "background-color": "#000",
        "box-shadow": "0px 1px 10px -5px #fff",
      });
      $(".navbar .logo-text").css({ color: "#fff" });
      $(".navbar .navbar-nav .nav-item .nav-link").css({ color: "#fff" });
      $(".btn-theme1").css({ "background-color": "#fff", color: "#002856" });
      $(".btn-theme").css({ "background-color": "#dc3545" });
      $(".about-us-section").css({ background: "#000" });
      $(".our-specialist").css({ background: "#000" });
      $(".text-custom-theme").css({ color: "#fff" });
      $(".heading_underline_theme").css({ background: "#fff" });
    } else {
      $(".navbar").css({
        "background-color": "#fff",
        "box-shadow": "0px 1px 10px -5px #000",
      });
      $(".navbar a span").css({ color: "#002856" });
      $(".navbar .navbar-nav .nav-item .nav-link").css({ color: "#002856" });
      $(".btn-theme1").css({ "background-color": "#002856", color: "#fff" });
      $(".btn-theme").css({ "background-color": "#002856" });
      $(".about-us-section").css({
        background: "url(assets/img/bg-about.jpg)",
        "background-size": "cover",
      });
      $(".our-specialist").css({ background: "#f8f9fa" });
      $(".text-custom-theme").css({ color: "#002856" });
      $(".heading_underline_theme").css({ background: "#002856" });
    }
  });

  $("#datepicker").datepicker();

  $("#toggle-menu").click(function () {
    $(".logo_text").toggle();
    $(".custom_link").toggle();
    $(".navbar").toggleClass("margin_adjust");
    $(".main-content").toggleClass("margin_adjust");
    $(".brand-link").toggleClass("padding_adjust1");
    $(".sidebar .header-links li").toggleClass("padding_adjust2");
  });

  $(".profile-img").click(function () {
    $(".custom_menu").toggle();
  });
});

function generate_year_range(start, end) {
  var years = "";
  for (var year = start; year <= end; year++) {
    years += "<option value='" + year + "'>" + year + "</option>";
  }
  return years;
}

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

createYear = generate_year_range(1970, 2080);
/** or
 * createYear = generate_year_range( 1970, currentYear );
 */

document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute("data-lang");

var months = "";
var days = "";

var monthDefault = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

if (lang == "en") {
  months = monthDefault;
  days = dayDefault;
} else if (lang == "id") {
  months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
} else if (lang == "fr") {
  months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  days = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ];
} else {
  months = monthDefault;
  days = dayDefault;
}

var $dataHead = "<tr>";
for (dhead in days) {
  $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

//alert($dataHead);
document.getElementById("thead-month").innerHTML = $dataHead;

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  var firstDay = new Date(year, month).getDay();

  tbl = document.getElementById("calendar-body");

  tbl.innerHTML = "";

  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  // creating all cells
  var date = 1;
  for (var i = 0; i < 6; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth(month, year)) {
        break;
      } else {
        cell = document.createElement("td");
        cell.setAttribute("data-date", date);
        cell.setAttribute("data-month", month + 1);
        cell.setAttribute("data-year", year);
        cell.setAttribute("data-month_name", months[month]);
        cell.className = "date-picker";
        cell.innerHTML = "<span>" + date + "</span>";

        if (
          date === today.getDate() &&
          year === today.getFullYear() &&
          month === today.getMonth()
        ) {
          cell.className = "date-picker selected";
        }
        row.appendChild(cell);
        date++;
      }
    }

    tbl.appendChild(row);
  }
}

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}

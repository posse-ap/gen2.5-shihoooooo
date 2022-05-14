"use strict";

function bargraph() {
  var cts = document.getElementById("bargraph").getContext('2d');
  var myChart = new Chart(cts, {

    type: "bar",    // ★必須　グラフの種類
    data: {
      labels: ["", "2", "", "4", "", "6", "", "8", "", "10", "", "12", "", "14", "", "16", "", "18", "", "20", "", "22", "", "24", "", "26", "", "28", "", "30"],  // Ｘ軸のラベル
      datasets: [
        {
          label: "系列Ａ",                            // 系列名
          data: [4, 4, 8, 4, 3, 5, 6, 7, 3, 2, 1, 1, 8, 2, 3, 1, 5, 2, 4, 8, 4, 3, 5, 6, 7, 3, 2, 1, 1, 8, 2, 3, 1, 5,],                 // ★必須　系列Ａのデータ
          backgroundColor: "#2596be",                  // 棒の塗りつぶし色
          borderColor: "#2596be",                         // 棒の枠線の色
          borderWidth: 2,                             // 枠線の太さ
        }
      ]
    },

    options: {                       // オプション
      responsive: true,  // canvasサイズ自動設定機能を使わない。HTMLで指定したサイズに固定
      title: {                           // タイトル
        display: true,                     // 表示設定
        fontSize: 1,                      // フォントサイズ
        fontFamily: "sans-serif",
        // text: 'タイトル'                   // タイトルのラベル
      },
      legend: {                          // 凡例
        display: false                     // 表示の有無
        // position: 'bottom'              // 表示位置
      },
      scales: {                          // 軸設定
        xAxes: [                           // Ｘ軸設定
          {
            display: true,                // 表示の有無
            barPercentage: 0.7,           // カテゴリ幅に対する棒の幅の割合
            categoryPercentage: 0.5,    // 複数棒のスケールに対する幅の割合
            scaleLabel: {                 // 軸ラベル
              display: true,                // 表示設定
              // labelString: '横軸ラベル',    // ラベル
              fontColor: "#2596be",             // 文字の色
              fontSize: 12                  // フォントサイズ
            },
            gridLines: {                   // 補助線
              display: false               // 補助線なし
            },
            ticks: {                      // 目盛り
              fontColor: "#2596be",             // 目盛りの色
              fontSize: 10               // フォントサイズ
            },
          }
        ],
        yAxes: [                           // Ｙ軸設定
          {
            display: true,                 // 表示の有無
            scaleLabel: {                  // 軸ラベル
              display: true,                 // 表示の有無
              // labelString: 'h',     // ラベル
              fontFamily: "sans-serif",      // フォントファミリー
              fontColor: "#2596be",             // 文字の色
              fontSize: 14                   // フォントサイズ
            },
            gridLines: {                   // 補助線
              display: false,               // 補助線なし
              color: "rgba(0, 0, 255, 0.2)", // 補助線の色
              zeroLineColor: "black"         // y=0（Ｘ軸の色）
            },
            ticks: {                       // 目盛り
              min: 0,                        // 最小値
              max: 8,                       // 最大値
              stepSize: 2,                   // 軸間隔
              fontColor: "#2596be",             // 目盛りの色
              fontSize: 14,                   // フォントサイズ
              callback: function (tick) {
                return + tick.toString() + 'h';
              }
            },
          }
        ],
      },
      layout: {                          // 全体のレイアウト
        padding: {                         // 余白
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      plugins: {
        labels: {
          display: false,
          fontColor: '#00000000',
          fontsize: 20,
        },
        datalabels: {
          display: false
        }
      },
    }
  });
}

bargraph();

var dataLabelPlugin1 = {
  afterDatasetsDraw: function (chart, easing) {
    // To only draw at the end of animation, check for easing === 1
    var ctx = chart.ctx;

    chart.data.datasets.forEach(function (dataset, i) {
      var dataSum = 0;
      dataset.data.forEach(function (element) {
        dataSum += element;
      });

      var meta = chart.getDatasetMeta(i);
      if (!meta.hidden) {
        meta.data.forEach(function (element, index) {
          // Draw the text in black, with the specified font
          ctx.fillStyle = 'rgb(255, 255, 255)';

          var fontSize = 12;
          var fontStyle = 'normal';
          var fontFamily = 'Helvetica Neue';
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

          // Just naively convert to string for now
          // var labelString = chart.data.labels[index];
          var dataString = (Math.round(dataset.data[index] / dataSum * 1000) / 10).toString() + "%";

          // Make sure alignment settings are correct
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          var padding = 5;
          var position = element.tooltipPosition();
          // ctx.fillText(labelString, position.x, position.y - (fontSize / 2) - padding);
          if (dataset.data[index] > 10) {
            ctx.fillText(dataString, position.x, position.y + (fontSize / 2) - padding);
          }
        });
      }
    });
  }
};

// // Chart
// var myChart = "myChart";
// let a = document.getElementById("piechartcontents");
// var chart = new Chart(a, {
//   type: 'pie',
//   data: {
//     labels: ["A", "B", "C", "D", "E", "F", "G"],
//     datasets: [{
//       label: "Sample",
//       backgroundColor: ["#3F51B5", "#F44336", "#FF9800", "#4CAF50", "#9C27B0", "#00BCD4", "#E91E63"],
//       data: [128, 120, 46, 82, 67, 46, 16],
//     }]
//   },
//   options: {
//     title: {
//       display: true,
//       text: "Sample"
//     },
//     legend: {
//     },
//     maintainAspectRatio: false,
//   },
//   plugins: [dataLabelPlugin1],
// });

var ctm = document.getElementById("piechartgengo");
var myPieChart = new Chart(ctm, {
  type: 'doughnut',
  data: {
    // labels: ["JavaScript", "CSS", "PHP", "HTML", "Laravel", "SQL", "SHELL", "情報システム基礎知識（その他）"],
    datasets: [{
      backgroundColor: [
        "#0345ec",
        "#0e71bd",
        "#1fbdde",
        "#3ccefe",
        "#b29ef3",
        "#6d46ec",
        "#4a17ee",
        "#3106c0"
      ],
      data: [41, 18, 10, 10, 9, 7, 6, 4]
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: '学習言語',
      fontSize: 20,
    }
    
  },
  plugins: [dataLabelPlugin1]
});

var ctq = document.getElementById("piechartcontents");
var myPieChart = new Chart(ctq, {
  type: 'doughnut',
  data: {
    // labels: ["JavaScript", "CSS", "PHP", "HTML", "Laravel", "SQL", "SHELL", "情報システム基礎知識（その他）"],
    datasets: [{
      backgroundColor: [
        "#0345ec",
        "#0e71bd",
        "#1fbdde",
        "#3ccefe",
        "#b29ef3",
        "#6d46ec",
        "#4a17ee",
        "#3106c0"
      ],
      data: [50, 24, 3]
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: '学習コンテンツ',
      fontSize: 20
    }
  },
  plugins: [dataLabelPlugin1]
});


// let submitbutton = document.getElementById("submitbutton");
//投稿ボタンを押したら、ローディング画面が出る、今までのモーダル画面は消える、別タブでtwitterが開く

let twittercomment = document.getElementById('js-twittercomment');


document.getElementById("submitbutton").onclick = function() {
  entireuppermodal.style.display = 'none';
  modalfooter.style.display = 'none';
  loader.style.display = 'block';
 
  setTimeout(() => {
    const loader = document.getElementById('loader');
    const complete = document.getElementById('complete');
    // 👇️ removes element from DOM
    loader.style.display = 'none';
    complete.style.display = 'block'

  }, 3000); // 👈️ time in milliseconds

  // ここに#buttonをクリックしたら発生させる処理を記述する

  //checkboxのtruefalse
  let value = twittercomment.value

  if (document.getElementById("js-twittercheckbox").checked && value) {
    window.open().location.href = `https://twitter.com/intent/tweet?text=${value}`;
  }
};

document.getElementById("js-buttonclose").onclick = function () {
  complete.style.display = 'none';
  entireuppermodal.style.display = 'block';
  twittercomment.value = null;
}
// if t

// //ローディング画面が３秒で消える、完了画
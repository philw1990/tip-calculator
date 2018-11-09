
      document.getElementById('container').onchange = function() {
          var bill = document.getElementById('billTotal').value;
          var tipPercent = document.getElementById('tipInput').value;
        var split = document.getElementById("splitInput").value;

        document.getElementById("tipOutput").textContent = tipPercent + "%";
        document.getElementById("splitOutput").textContent = split;

        document.getElementById("newBillOutput").textContent = "£" + (bill / split).toFixed(2);
        document.getElementById("totalTip").textContent = "£" + (((bill / split) / 100) * tipPercent).toFixed(2);
      }

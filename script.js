        function guard() {
            document.getElementById("select").onchange = function(){
                console.log(document.getElementById("select").value);
            }
            let clickCount = 0;
        let startTime = null;
        let dizi = [];

        function cps() {
            clickCount++;
            if (startTime === null) {
                startTime = new Date().getTime();
                setInterval(function() {
                    let currentTime = new Date().getTime();
                    let timeDifference = (currentTime - startTime) / 1000;
                    let cps = clickCount / timeDifference;
                    dizi.push(cps.toFixed(2));
                    console.log(dizi);
                    document.getElementById("cps").textContent = "CPS(tıklama hızı): " + cps.toFixed(2)
                    startTime = currentTime;
                    clickCount = 0;
                }, 500);
            }
        };

            document.getElementById("clickerstart").onmousedown = function(event) {
                let selectvalue = document.getElementById("select").value
            let click = 0;
            let time = selectvalue
                let interval = setInterval(function() {
                    time--;
                    if (time <= 0) {
                        if(document.getElementById("cps").textContent == "CPS(tıklama hızı): 0"){
                        alert("süreniz bitti\ntıkladığınız miktar: " + click + "\nEn yüksek CPS(tıklama hızı): 0");
                        clearInterval(interval);
                        window.location.reload();
                        }
                        else{
                        alert("süreniz bitti\ntıkladığınız miktar: " + click + "\nEn yüksek CPS(tıklama hızı): " + Math.max(...dizi));
                        clearInterval(interval);
                        window.location.reload();
                        }
                    }
                }, 1000);

                document.getElementById("clickerstart").remove();
                document.getElementById("select").remove()
                document.getElementsByTagName("div")[1].innerHTML = "tıklama oranı: " + click + "<br/>" + "zaman: " + time + "s";

                let create = document.createElement("button");
                create.textContent = "Tıkla!!!!!!";
                create.style.cursor = "pointer";
                create.style.padding = "20px 20px"
                document.getElementById("cps").textContent = "CPS(tıklama hızı): 0";
                setInterval(function(){document.getElementsByTagName("div")[1].innerHTML = "tıklama oranı: " + click + "<br/>" + "zaman: " + time + "s";}) 
                create.onmousedown = function(event) {
                    event.preventDefault()
                    cps();
                    click++;
                };
                document.body.getElementsByTagName("div")[0].append(create);
            };
        }

        guard();

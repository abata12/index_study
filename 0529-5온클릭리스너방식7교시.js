

const $popup = document.querySelector("#popup");

        $popup.children[1].addEventListener("click", dat );

        const $footer = document.querySelector("footer");
        $footer.addEventListener("click" , bo );
        
        function dat(){
            $popup.style.display="none";
        }
        function bo(){
            $popup.style.display="block";
        }
        //메뉴에서 "서브메뉴 1-2"를 클릭하면 바탕색이 빨간색이 된다. 
        //(0529-클릭이벤트리스너html_화일에서 1-2메뉴에  onclick = "red()"수정후 0529-5js 화일로와서아래작성)

        const $subMenu12 = document.querySelector("nav li:first-child a:last-child");

        function red(){
            $subMenu12.style.background = "red";
        }
         //메뉴에서 "서브메뉴 2-4"를 클릭하면 바탕색이 파란색이 된다. 
        const $subMenu24 = document.querySelector("#blue");
        $subMenu24.addEventListener('click', blue);

        function blue(){
            $subMenu24.style.background = "blue";
        }
        //메뉴에서 "서브메뉴 4-1"를 클릭하면 글자색이 빨간색이 된다. 이벤트핸들러방식  onclick="tr()"방식구현 
        //id="sm41"
        const $sm41 = document.querySelector("#sm41");

        function tr() {
            $sm41.style.color = 'red';
            $sm41.style.textDecoration = 'none';
        }
        //메뉴에서 "공지사항"영역을 클릭하면 바탕색이 토마토색이 된다. 이벤트리스너방식구현(onclick="tr()"방식구현 안된다.)  

        $popup.addEventListener("click", tomato);
        function tomato() {
            $popup.style.background = 'tomato';
        }



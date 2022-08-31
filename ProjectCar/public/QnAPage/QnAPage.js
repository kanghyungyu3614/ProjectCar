

// 4. 여러개 board 객체를 저장할 배열 선언 
let boardlist = [ ] 
// 인자로 들어갈 숫자 미리 선언
let number


// 3. 함수 선언 [ 글 등록 버튼을 클릭할때 마다 ] 
function 내용추가(){
	// 1. HTML에서 입력된 데이터 가져와서 변수에 담기 
	let QnASebTableSebNumberId = Number(document.querySelector("#QnASebTableSebNumberId").textContent);
	let textName = document.getElementById('textName').value
	let textTitle = document.getElementById('textTitle').value
	let textContent = document.getElementById('textContent').value
	let textContentPassword = document.getElementById('textContentPassword').value
	let fakeTextContent = ''
	if(textContentPassword.length!==4){
		alert("비밀번호 4자리가 아닙니다.")
		document.getElementById('textName').value = ''
		document.getElementById('textTitle').value= ''
		document.getElementById('textContent').value= ''
		document.getElementById('textContentPassword').value = ''
		return
	}
	else if(textContentPassword.length===4){
	
	//내용을 알수없게 만들기 
	for(let i=0; i<textContent.length; i++){
		fakeTextContent += "*"
	}
	
	
	// 2. 객체에 담기
	let board = {
		번호 : QnASebTableSebNumberId,
		작성자 : textName ,
		제목 : textTitle,
		진짜내용 : textContent,
		가려진내용 : fakeTextContent,
		비밀번호 : textContentPassword,
		삭제번호 : "0"
	}
	// 다음 QnASebTableSebNumberId 의 숫자가 증가해야 하니까 
	QnASebTableSebNumberId += 1
	// 5. 객체를 배열에 저장한다. 
	boardlist.push( board ) // 배열명.push( 데이터 ) : 배열에 데이터 추가함수 
	alert('[안내] 글 등록이 되었습니다.')
	게시물출력()
	// 6. input에 공백 넣기 
	document.getElementById('textName').value = ''
	document.getElementById('textTitle').value= ''
	document.getElementById('textContent').value= ''
	document.getElementById('textContentPassword').value = ''
	document.querySelector("#QnASebTableSebNumberId").textContent =String(QnASebTableSebNumberId);
	
	// 7. 글 등록시 게시물출력 함수 호출 
	}
} // 글등록 함수 end 





// 1. 
function 게시물출력(){
	//처음 게시판값 맨위 상단 똑같게 똑같게
	let html = '<tr id="QnAMainTableRow"> <th class="QnAMainTableNumber">번호</th> <th>이름</th>  <th>제목</th>  <th>내용</th>  <th>상담내용</th> </tr>'
	
	//비밀번호 
	
	
	for( let i = 0 ; i<boardlist.length ; i++ ){
		// i는 0부터 배열의길이 까지 1씩 증가 			// 배열내 i번째 객체내 '제목' 키 호출 -> 값 이 나옴
		if(i===boardlist[i].번호){
			number = i
		}
		html += `<tr class="QnAMainTableRowtwo" ><td class="QnAMainTableNumber">${boardlist[i].번호}</td>  
		         <td id=QnATextName${i}>${boardlist[i].작성자}</td>
		         <td id=QnATitle${i}>${boardlist[i].제목}</td>                      
                 <td id=QnAContent${i}>${boardlist[i].가려진내용}</td>                           
				 <td id=QnAContentSolution${i}>	
				 <button class="QnASolutionButton" id="ButtonAdd${i}" onclick="AddButton(${i})">상담내용<br>추가하기</button>	 
			     <button class="QnASolutionButton" id="ButtonDelete${i}" onclick="DeleteButton(${i})">삭제하기</button>                                                                 
				 </td>
				</tr>`
	}			   

	document.getElementById('QnAMainTable').innerHTML = html
} // 게시물출력 함수 end  


function AddButton(number){
	//일단 버튼 2개를 없앤다.
	
	//number 밑어꺼에 포함시켜야 한다.
	document.querySelector(`#ButtonAdd${number}`).style.display = "none"
	document.querySelector(`#ButtonDelete${number}`).style.display = "none"	
	
    //비밀번호 4자리를 입력하고 엔터를 눌러주세요. 랑 비밀번호창이 필요하다.	
	let input = document.createElement('input')
	let span = document.createElement('span')
	//span이랑 input id 설정하기 
	let QnAFindSpan ="SpanPassword"+String(number)
	let QnAFindPassword = 'CreateSolution'+String(number)
	//span 내용과 속성 설정
	span.innerHTML = "비밀번호 4자리를 입력하고 엔터를 눌러주세요. : "
	span.setAttribute('id',QnAFindSpan)
	//input 내용과 속성 설정 : id는 값비교때문 class 는 css설정때문에 적용한다.
	input.setAttribute('type','password')
	input.setAttribute('id',QnAFindPassword)
	input.setAttribute('class','QnAtextContentPassword')
	
	let QnAFindPasswordId = `#QnAContentSolution${number}`

	document.querySelector(QnAFindPasswordId).appendChild(input)
	document.querySelector(QnAFindPasswordId).appendChild(span)
	input.addEventListener('keydown', (e)=>{
		if(e.keyCode ===13){

			AddSolutionButton(number , input ,span )

		}
		})
    // 1 . 비밀번호 입력하면?
}




function AddSolutionButton(number, input ,span){

	   if(boardlist[number].비밀번호 ===input.value){

			span.style.display = 'none';
			input.style.display = 'none';
	
	    // 2 . 내용에 진짜 내용 할당해서 진짜 내용을 보여준다.
		for(let i=0; i<boardlist.length; i++){
			if(i===number){
		    let find = `#QnAContent${number}`
			document.querySelector(find).innerHTML = boardlist[i].진짜내용			
			}else{
				continue;
			}
		}
		
		//4.상담글 내용 담는 용도
		let ContentSolutionText = document.createElement('input')
		ContentSolutionText.setAttribute("type","text")
		ContentSolutionText.setAttribute("id",`QnAFindPassword${number}`)
		ContentSolutionText.setAttribute("class",`QnAFindPassword`)	
        document.querySelector(`#QnAContentSolution${number}`).appendChild(ContentSolutionText)
	    // 3. 상담글을 추가하는 기능 
		let ContentSolutionButton = document.createElement('button')
		ContentSolutionButton.textContent = "상담글을 추가하시겠습니까?"
		ContentSolutionButton.className ="CreateSolution";
		ContentSolutionButton.setAttribute("id",`ContentSolutionButton${number}`)
        document.querySelector(`#QnAContentSolution${number}`).appendChild(ContentSolutionButton)
		let SolutionQnA  = document.getElementById(`QnAContentSolution${number}`)
		
		
        ContentSolutionButton.addEventListener("click",()=>{
	        ContentSolutionButton.style.display = "none";
	        ContentSolutionText.style.display = "none";
            SolutionQnA.textContent = ContentSolutionText.value;
            
        
        
         })
        
        } //if 문 끝		
        else if(boardlist[number].비밀번호 !== input.value){
	     alert("비밀번호를 다시 입력하세요.")
        }

}
//AddSolutionButton 끝
function DeleteButton(number){
	for(let i=0; i<boardlist.length; i++){
		if(number === boardlist[i].번호){
			boardlist[i].작성자 = '삭제된 게시물입니다.'
			boardlist[i].제목 = '삭제된 게시물입니다.'
			boardlist[i].내용 = '내용을 보실수 없습니다.'
			boardlist[i].삭제번호 = "1"; 
			게시물출력()
			삭제게시물()
		}
		else{
		}
	}
		    	
}
function  삭제게시물 (){
 
 for(let i=0; i<boardlist.length; i++){
	
	if(boardlist[i].삭제번호 === "1"){
		document.querySelector(`#QnAContentSolution${i}`).textContent = '';
		document.querySelector(`#QnAContent${i}`).textContent = '내용을 보실수 없습니다.'
	}
	
 }	
}









 let QnASebTable = document.querySelector("#QnASebTable")
 console.log("2번줄 : QnASebTable",QnASebTable)
/**
 * 
 */
 // 4. 여러개 board 객체를 저장할 배열 선언 
let boardlist = [ ] 
let Boardnum = 0;
let number
//let QnASebTableSebNumberId = Number(document.querySelector("#QnASebTableSebNumberId").textContent);
//	document.querySelector("#QnASebTableSebNumberId").textContent +=1
//	console.log(`document.querySelector("#QnASebTableSebNumberId")`,document.querySelector("#QnASebTableSebNumberId").textContent)
// js가 실행될때 함수 실행
// 게시물출력()
 
 
 

// 3. 함수 선언 [ 글 등록 버튼을 클릭할때 마다 ] 
function 내용추가(){
	// 1. HTML에서 입력된 데이터 가져와서 변수에 담기 
	let QnASebTableSebNumberId = Number(document.querySelector("#QnASebTableSebNumberId").textContent);
	let textName = document.getElementById('textName').value
	let textTitle = document.getElementById('textTitle').value
	let textContent = document.getElementById('textContent').value
	let textContentPassword = document.getElementById('textContentPassword').value
	
	if(textContentPassword.length!==4){
		alert("비밀번호 4자리가 아닙니다.")
		document.getElementById('textName').value = ''
		document.getElementById('textTitle').value= ''
		document.getElementById('textContent').value= ''
		document.getElementById('textContentPassword').value = ''
		return
	}
	else if(textContentPassword.length===4){

	// 2. 객체에 담기
	let board = {
		번호 : QnASebTableSebNumberId,
		작성자 : textName ,
		제목 : textTitle,
		내용 : textContent,
		비밀번호 : textContentPassword
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
		html += '<tr class="QnAMainTableRowtwo" >'+
					'<td class="QnAMainTableNumber"> '+boardlist[i].번호+' </td> '+
					'<td class='+i+'>'+boardlist[i].작성자+'</td>'+ 
					'<td class='+i+'>'+boardlist[i].제목+'</td> '+
					'<td class='+i+'>'+boardlist[i].내용+'</td> '+
					'<td>'+'<button id="ButtonAdd" onclick="AddButton('+i+')" >'+"상담내용"+'<br>'+"추가하기"+'</button>'+'<button id="ButtonDelete" onclick="DeleteButton('+i+')">'+"삭제하기"+'</button>'+'</td> '+					
				'</tr>'
				   
	}
	document.getElementById('QnAMainTable').innerHTML = html
} // 게시물출력 함수 end  







function DeleteButton(number){

	for(let i=0; i<boardlist.length; i++){
		if(number === boardlist[i].번호){
			boardlist[i].작성자 = '삭제된 게시물입니다.'
			boardlist[i].제목 = '삭제된 게시물입니다.'
			boardlist[i].내용 = '내용을 보실수 없습니다.'
			게시물출력()
			document.querySelector("#ButtonAdd").style.display = "none"
			document.querySelector("#ButtonDelete").style.display = "none"
		}
	}
		    	

}
























/**
 
1.이메일 형식 체크
​
	1. html 요소를 js 넣기
	> 1.  이메일 형식은   @   .com  항목 체크
	​
	2. 아이디 비밀번호 일치 여부
	​
       기존 입력한 아이디와 비밀번호를 일치
 
 * 
 */
 
 

 
 // 1. HTML에서 요소 가져오기
 
const id = document.querySelector( '#signup_id' )
const emaillp = document.querySelector( '#emaillp' )

const isemail = (value) => {
	return (value.indexOf('@') > 1) && (value.split[1].indexOf(".") > 1)
     // 입력데이터의 @가 있는지          이면서  입력데이터의 @ 뒤문자
     //
}

emailbox.addEventListener( 'keyup' , ( event ) => {
	const value = event.currentTarget.value
	if( isemail(value) ){
		p.style.color = 'green'
		p.textContent = `이메일 형식 입니다. : ${value}`
	}else {
		p.style.color = 'red'
		p.textContent = `이메일 형식이 아닙니다. : ${value}`
	}
})
 
 
 
"use strict"
const popupLinks = document.querySelectorAll('.popup-link')
const body = document.querySelectorAll('body')
const lockpadding = document.querySelectorAll('.lock-padding')
const currentPopup = document.getElementById('popup')
const closeCross = document.querySelector('.close-popup')

let unlock = true
const timeout = 800

const popupOpen = () => {
	currentPopup.classList.add('open')
	document.body.classList.add ('lock')
} 
const popupClose = () => {
	currentPopup.classList.remove('open')
	document.body.classList.remove ('lock')
}
function closeSpace (e) {
	const target = e.target;
	if (!target.closest('.popup__content')) {
		popupClose()
	}
	
}

popupLinks.forEach(link => {
	const onClick = (e) => {
		e.preventDefault()
		popupOpen ();
	}

	link.addEventListener("click", onClick)
})



// for (let i = 0; i < popupLinks.length; i++) {
// 	let popupLink = popupLinks[i];
// 	console.log(popupLink)
// 	popupLink.addEventListener("click", (e) => {
// 		popupOpen ();
// 		e.preventDefault()
// 	});
// }

closeCross.addEventListener("click", (e) => {
	popupClose ();
	e.preventDefault()
});
currentPopup.addEventListener("click", closeSpace);




// var scrollDiv = document.createElement("div");
// scrollDiv.className = "scrollbar-measure";
// document.body.appendChild(scrollDiv);

// // Get the scrollbar width
// var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
// console.warn(scrollbarWidth);



// function bodylock() {
// 	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
// 	if (lockpadding.length > 0) {
// 		for (let index = 0; index < lockpadding.length; index++) {
// 			const el = lockpadding[index];
// 			el.style.paddingRight = lockPaddingValue
// 		}
// 	}
// 		body.style.paddingRight = lockPaddingValue
// 		body.classList.add('lock')
// 		unlock = false;
// 		setTimeout(() => {
// 			unlock = true;
// 		}, timeout)
// 	}




// const popupLinks = document.querySelector('.popup-link')
// const body = document.querySelectorAll('body')
// const lockpadding = document.querySelectorAll('.lock-padding')
// const currentPopup = document.getElementById('popup')

// let unlock = true
// const timeout = 800

// if(popupLinks.length > 0) {
// 	for(let index = 0; index < popupLinks.length; index++) {
// 		const popupLink = popupLinks[index]
// 		popupLink.addEventListener('click', function (e) {
// 			const popupName = popupLink.getAttribute('href').replace('#','')
// 			const curentPopup = document.getElementById(popupName)
// 			popupOpen(curentPopup)
// 			e.preventDefault()
// 		})
// 	}
// }

// const popupCloseIcon = document.querySelectorAll('.close-popup')
// if(popupCloseIcon.length > 0) {
// 	for(let index = 0; index < popupCloseIcon.length; index++) {
// 		const el = popupCloseIcon[index]
// 		el.addEventListener('click', (e) => {
// 			popupClose(el.closest('.popup'))
// 			e.preventDefault()
// 		})
// 	}
// }

// function popupOpen(curentPopup) {
// 	if (curentPopup && unlock) {
// 		const popupActive = document.querySelector('.popup.open')
// 		if (popupActive) {
// 			popupClose(popupActive, false)
// 		} else {
// 			bodylock()
// 		}
// 		curentPopup.classList.add('open')
// 		curentPopup.addEventListener('click', function(e) {
// 			if (!e.target.closest('.popup__content')) {
// 				popupClose(e.target.closest('.popup'))
// 			}
// 		})
// 	}
// }

// function popupClose(popupActive, doUnlock = true) {
// 	if (unlock) {
// 		popupActive.classList.remove('open');
// 		if (doUnlock) {
// 			bodyUnLock();
// 		}
// 	}
// }




// 	function bodyUnLock() {
// 		setTimeout(()=> {
// 			for(let index = 0; index < lockpadding.length; index++) {
// 				const el = lockpadding[index]
// 				el.style.paddingRight = '0px';
// 			}
// 			body.style.paddingRight = '0px'
// 			body.classList.remove('lock')
// 		}, timeout)
// 		unlock = false
// 		setTimeout(() => {
// 			unlock = true
// 		}, timeout)
// 	}

// 	document.addEventListener('keydown', (e) => {
// 		if (e.which === 27) {
// 			const popupActive = document.querySelector('.popup.open')
// 			popupClose(popupActive)
// 		}
// 	})

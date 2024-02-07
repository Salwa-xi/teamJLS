const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})








// بيانات مهارات الفرد
const skillsData = {
    labels: ['التواصل', 'القيادة', 'التحليل', 'الإبداع', 'العمل الجماعي'],
    datasets: [{
        label: 'تقييم مهارات الفرد',
        data: [8, 7, 9, 6, 8],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
    }]
};

// بيانات الساعات التدريبية
const trainingHoursData = {
    labels: ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو'],
    datasets: [{
        label: 'عدد الساعات التدريبية',
        data: [40, 50, 45, 55, 60, 50],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
    }]
};

// إنشاء الرسم البياني لمهارات الفرد
const skillsChartCtx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(skillsChartCtx, {
    type: 'pie',
    data: skillsData,
    options: {
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'تقييم مهارات الفرد'
            }
        }
    }
});

// إنشاء الرسم البياني للساعات التدريبية
const trainingHoursChartCtx = document.getElementById('trainingHoursChart').getContext('2d');
const trainingHoursChart = new Chart(trainingHoursChartCtx, {
    type: 'bar',
    data: trainingHoursData,
    options: {
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'عدد الساعات التدريبية'
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
});

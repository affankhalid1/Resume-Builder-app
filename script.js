// Function to update the resume preview based on form input
function updateResume() {
    document.getElementById('display-firstname').innerText = document.getElementById('firstname').value;
    document.getElementById('display-lastname').innerText = document.getElementById('lastname').value;
    document.getElementById('imagePreview').innerText = document.getElementById('imageUpload').value;
    document.getElementById('imagePreview1').innerText = document.getElementById('imageUpload').value;
    document.getElementById('display-title').innerText = document.getElementById('title').value;
    document.getElementById('display-phone').innerText = document.getElementById('phone').value;
    document.getElementById('display-email').innerText = document.getElementById('email').value;
    document.getElementById('display-address').innerText = document.getElementById('address').value;
    document.getElementById('display-profile').innerText = document.getElementById('profile').value ;
    document.getElementById('display-position').innerText = document.getElementById('current-position').value;
    document.getElementById('display-company-name').innerText = document.getElementById('company-Name').value;
    document.getElementById('display-position-ref').innerText = document.getElementById('current-position').value;
    document.getElementById('display-firstname-ref').innerText = document.getElementById('firstname').value;
    document.getElementById('display-lastname-ref').innerText = document.getElementById('lastname').value;
    document.getElementById('display-company-name-ref').innerText = document.getElementById('company-Name').value;
    document.getElementById('display-experience').innerText = document.getElementById('experience').value;
    


    document.getElementById('display-university').innerText = document.getElementById('Universities').value;
    document.getElementById('display-degree').innerText = document.getElementById('degrees').value;
    document.getElementById('display-start-date').innerText = document.getElementById('start-date').value;
    document.getElementById('display-end-date').innerText = document.getElementById('end-date').value;


    document.getElementById('display-L1').innerText = document.getElementById('L1.').value;
    document.getElementById('display-L2').innerText = document.getElementById('L2.').value;

    document.getElementById('display-S1').innerText = document.getElementById('S1').value;
    document.getElementById('display-S2').innerText = document.getElementById('S2').value;
    document.getElementById('display-S3').innerText = document.getElementById('S3').value;
}

// Add event listeners to update the resume as user types
document.getElementById('resume-form1').addEventListener('input', updateResume);
document.getElementById('resume-form2').addEventListener('input', updateResume);


// Load the image
function previewImage(event){

    const imagePreview = document.getElementById('imagePreview');
    const imagePreview1 = document.getElementById('imagePreview1');
    const file = event.target.files[0];

    if(file){
        const reader = new FileReader();
        reader.onload = function(e){
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
            imagePreview1.src = e.target.result;
            imagePreview1.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
    
}
// Function to generate the PDF with styles
function generateStyledPDF(){

    const element = document.getElementById('resume-container')

    const options = 
    {
        margin: 0.5,//Top,right, bottom, left all margins set to zero
        filename: 'Resume.pdf',
        image: {type:'jpeg', quality: 0.98},
        html2canvas: {scale:2},
        jsPDF: {unit: 'in', format: 'a4', orientation: 'portrait'}
    }
    // generate PDF using the options
    html2pdf().set(options).from(element).save() 
}

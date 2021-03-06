// Popup
const addNodePopupBody = `
  <!--<h4 style='margin-bottom:15px;'>Capacity Changes</h4>

<p style='margin-bottom:20px;'> This cluster has dected an additional ammount of resources, to be licensed to keep a valid licenses state.</p>

<div class='license-pair current-consumption' style='margin-left: 20px;'>
  <h3> Cores  <code> 30 </code></h3>
  <h3> HDD  <code> 300 </code></h3>
  <h3> SSD  <code> 300 </code></h3>
</div>  -->

<h4 style='margin-top:2px; margin-bottom:15px;'>Current Coin usage</h4>

<div class='license-pair current-consumption' style='margin-left: 20px; margin-top:20px;'>
  <h3><kbd> Acropolis Pro  12000 Coins</kbd> </h3>
  <h3><kbd> File Server 12000 Coins</kbd> </h3>
</div>`


const popupData = {
  title: [
    'License Cluster',
    'Reclaiming licenses',
    'Next Steps',
    'Licenses Reclaimed',
    'Upload License File',
    '',
    'Introducing Coins',
    'License Details'
  ],

  body: [

    //0
    `
    <iframe src='https://license-v2.netlify.com'></iframe>
    <input type="file" id='file'>
    <label for='path2'>Select file</label>

    `,


    //1
    `
    <h3 style='margin-bottom:0px'>
      Select your cluster summary file
    </h3>

    <p style='margin-bottom:20px; width:100%'>
      This has the data needed to license your cluster.
    </p>

    <input type="file" id='file'>
    <label for='path2'>Select file</label>

    <div class='upload-file'>
      <input class='path' readonly type='text' id='path2'></input>
      <label class='file-button' for='file'>Select File</label>
    </div>`,


    //2 New cluster changes
    `
    <h2>Congratulations</h2>
    <p style='color:#22272E; width:100%; text-align:left' >

  Your license changes have been successfully saved in the license summary file. Use this new license summary file to update the license state of your cluster.</p>
    <details style='width:100%; display:flex; justify-content:center;'>
      <summary>Transaction details</summary>
      <div class='table-outline' style='margin-top:15px; padding:1px 0;'>
        <table class='small-table'>
          <thead style='border-radius: 4px 4px 0 0'>
            <th>Acropolis License</th>
            <th>Consumed</th>
            <th>Remaining</th>
            <th>Exp Date</th>
          </thead>
          <tr>
            <td> Pro Core </td>
            <td> 8</td>
            <td> 39 </td>
            <td> 10/10/2020 </td>
          </tr>
          <tr>
            <td> Pro HDD </td>
            <td> 12</td>
            <td> 15 </td>
            <td> 10/10/2020 </td>
          </tr>
          <tr>
            <td> Pro Flash </td>
            <td> 4</td>
            <td> 40 </td>
            <td> 10/10/2020 </td>
          </tr>
          <tr>
            <td> File Server Core</td>
            <td> 24</td>
            <td> 100 </td>
            <td> 10/10/2020 </td>
          </tr>
          <tr>
            <td> File Server HDD</td>
            <td> 24</td>
            <td> 100 </td>
            <td> 10/10/2020 </td>
          </tr>
          <tr>
            <td> File Server Flash</td>
            <td> 24</td>
            <td> 100 </td>
            <td style='text-align:right'> 10/10/2020 </td>
          </tr>
        </table>
      </div>
    </details>
      `,

    //3
    `
    <h3 style='margin-bottom:0px'>
      Select your cluster summary file
    </h3>

    <p style='margin-bottom:20px; width:100%'>
      This has the data needed to license your cluster.
    </p>

    <input type="file" id='file'>
    <label for='path2'>Select file</label>

    <div class='upload-file'>
      <input class='path' readonly type='text' id='path2'></input>
      <label class='file-button' for='file'>Select File</label>
    </div>`,

    //4
    `  <h3 style='margin-bottom:0px'>
        Select your cluster summary file
      </h3>

      <p style='margin-bottom:20px; width:100%'>
        This has the data needed to license your cluster.
      </p>

      <input type="file" id='file'>
      <label for='path2'>Select file</label>

      <div class='upload-file'>
        <input class='path' readonly type='text' id='path2'></input>
        <label class='file-button' for='file'>Select File</label>
      </div>`,

    //5
    `
    <h3 style='margin-bottom:0px'>
      Select your license file
    </h3>

    <p style='margin-bottom:20px; width:100%'>
      This will update your cluster licensing state
    </p>

    <input type="file" id='file'>
    <label for='path2'>Select file</label>

    <div class='upload-file'>
      <input class='path' readonly type='text' id='path2'></input>
      <label class='file-button' for='file'>Select File</label>
    </div>`,

    //6
    `
    <video class='video' id='myvideo' controls>
      <source src="img/ccu.mp4" type="video/mp4">
      Your browser does not support the video tag.

    </video>

    <a class='link' href='img/ccu.mp4' target='_blank'>Watch fullscreen</a>
    `,

    //7

    `
    <h3 style='font-weight:500;'>Ntnx_Marketing_001<br><kbd style='font-weight:400;'>UUID : 123231231232132<br>  ${capacityData.Nodes} Nodes</kbd></h3>
    <a class='pop-link'> See licensing History </a>

    <h3 style='margin-top:10px;'>Capacity</h3>
    <div class='deck' style='margin-bottom:20px;'>
    <div class='popup-card'> <h3>${capacityData.Cores} <kbd>cores </kbd></h3></div>

    <div class='popup-card'> <h3>${capacityData.HDD} <kbd>TiB HHD </kbd></h3></div>

    <div class='popup-card'> <h3>${Math.round(capacityData.SSD)} <kbd>TiB SSD </kbd></h3></div>
    </div>

    <div class='separator'></div>

    <h3>Cluster Licenses <kbd>&nbsp; 920 Coins</kbd></h3>
    <div class='deck' style='margin-bottom:30px;'>
    <div class='popup-card' style='width:100%;'> <h3 style='text-align:left; margin-left:15px;'>Acropolis Pro <kbd>&nbsp;120 Coins </kbd></h3></div>

    <div class='popup-card' style='width:100%; margin-top:10px;'> <h3 style='text-align:left; margin-left:15px;'>File Server <kbd>&nbsp;800 Coins </kbd></h3>
    </div>

    </div>


    <h3 style='margin-top:60px;'>Cluster Coin consumption<kbd>&nbsp; 920 Coins</kbd></h3>
    <div class='deck'>
    <div class='popup-card' style='width:100%;'> <h3 style='text-align:left; margin-left:15px;'>LIC-123123123 <kbd>&nbsp;&nbsp;460 Coins &nbsp; exp.12/12/2020</kbd></h3></div>

    <div class='popup-card' style='width:100%; margin-top:10px;'> <h3 style='text-align:left; margin-left:15px;'>LIC-123123123 <kbd>&nbsp;&nbsp;450 Coins &nbsp; exp.12/12/2020</kbd></h3></div>

    </div>
    `,

    //8

    `
    <iframe src='https://license-v2-a.netlify.com'></iframe>
    <input type="file" id='file'>
    <label for='path2'>Select file</label>

    `,
  ],

  footer: [
    //0
    `<button class="primary redeem btn-disabled">Next</button>`,

    //1
    `<button class="primary reclaim btn-disabled">Reclaim</button>`,

    //2
    `<button class="primary"><a href='img/license-file.xml' download> Download </a></button>`,

    //3
    `<button class="secondary cancel"> Cancel </button>
     <button class="primary congrats"> Save Changes </button>`,

    //4
    `<button class="primary see-licenses btn-disabled"> Apply </button>`,

    //5
    `<button class="primary add-node btn-disabled">Next</button>`,

    //6
    `<button class="secondary cancel" style="margin-right:0"> Done </button>`,

    //7
    `<button class="secondary cancel" style="margin-right:0"> Done </button>`,

    //8
    `<button class="primary manage-addons btn-disabled">Next</button>`,
  ]
}


const layer2Data = {
  body: [
    //0
    `
    <div class="popup-header">${popupData.title[0]}</div>

      <div class="popup-body panels">

        <div class='panel1'>

        <h4 class= 'aos-data' style='  margin-top: 0px; margin-bottom:15px;'>Select primary license type </h4>

          <div class='license-pair aos-data'>

            <input
            type='radio'
            checked='checked'
            value='starter'
            style='margin-right: 10px;'
            id='acropolis-starter'>

            Starter

          </div>
          <div class='license-pair aos-data'>
            <input
            type='radio'
            value='pro'
            style='margin-right: 10px;'
            id='acropolis-pro'>
            Pro
          </div>
          <div class='license-pair aos-data' style='margin-bottom:0px;'>
          <input
           type='radio'
           value='ultimate'
           style='margin-right: 10px;'
           id='acropolis-ultimate'>
           Ultimate
          </div>

        <div class='separator aos-data' style='margin-top:20px;'></div>

        <h4 style=' margin-top: -10px; margin-bottom:15px;' class='addon-data'>Select add-on license type </h4>
          <div class='license-pair addon-data'>
            <input type='checkbox'
            style='margin-right: 10px;
            margin-bottom:10px;'
            id='fs'
            value='fs'>
            File Server <br>
          </div>

          <div class='license-pair addon-data'>
            <input
            type='checkbox'
            style='margin-right: 10px;'
            id='sw'
            value='sw'>
            Software Encryption<br>
          </div>
          <p style='margin-top:20px; margin-bottom:10px;'>This cluster will be licensed until 12/12/20 based on the earliest license expiration date.</p>
        </div>
      </div>

    <div class="popup-footer">${popupData.footer[3]}</div>
`,
    //1
    `
  <div class="popup-header">${popupData.title[3]}</div>
  <div class="popup-body">
    <span class='count money'>4000</span>
    <p style='margin-bottom:30px;'> Their expiration date is 12/12/2020</p>
    <h3 style='text-align:center; margin-bottom:0;'> Your unused licenses have been credited coins to your account.</h3>
  </div>
  <div class="popup-footer">${popupData.footer[6]}</div>
`,
`<div class="popup-header">${popupData.title[3]}</div>
<div class="popup-body">
<h2>Congratulations</h2>
<p style='color:#22272E; width:100%; text-align:left' >

Your licenses have been successfully reclaimed and saved in the license summary file. Use this new license summary file to update the license state of your cluster.</p>
<details style='width:100%; display:flex; justify-content:center;'>
  <summary>Transaction details</summary>
  <div class='table-outline' style='margin-top:15px; padding:1px 0;'>
    <table class='small-table'>
      <thead style='border-radius: 4px 4px 0 0'>
        <th>Acropolis License</th>
        <th>Reclaimed</th>

        <th>Exp Date</th>
      </thead>
      <tr>
        <td> Pro Core </td>
        <td> 8</td>

        <td> 10/10/2020 </td>
      </tr>
      <tr>
        <td> Pro HDD </td>
        <td> 12</td>

        <td> 10/10/2020 </td>
      </tr>
      <tr>
        <td> Pro Flash </td>
        <td> 4</td>

        <td> 10/10/2020 </td>
      </tr>
      <tr>
        <td> File Server Core</td>
        <td> 24</td>

        <td> 10/10/2020 </td>
      </tr>
      <tr>
        <td> File Server HDD</td>
        <td> 24</td>

        <td> 10/10/2020 </td>
      </tr>
      <tr>
        <td> File Server Flash</td>
        <td> 24</td>

        <td> 10/10/2020 </td>
      </tr>
    </table>
  </div>
</details>
</div>
<div class="popup-footer">${popupData.footer[2]}</div>
</div>
  `,

  ]
}

// Cluster license

function layer2(i) {
  $('body').append(
    `<div class="overlay overlay2" style='background-color:transparent;'>
      <div class="popup layer2" style='opacity:0; width:500px;'>
      <div> ${layer2Data.body[i]}</div>
      </div>
    </div>`
  );

  $('.back, .popup-header2').click(function() {
    $('.layer2').addClass('disappear');
    $('.popup:not(.layer2)').css('animation', 'reverse-layer 600ms forwards');
    $('.popup:not(.layer2)').removeClass('second');
    $('.layer2, .overlay2').remove();
  });

  if (i === 1) {
    $('.layer2').css('width', '400px');
  }

  popAnimate();
  CheckoutData();
  CheckoutData2();
  CheckoutData3();

  $('.congrats').click(function() {
    $('.popup').addClass('disappear');
    $('.overlay').removeClass('show');
    $('html').css('overflow', '');
    setTimeout(function() {
      $('.overlay').fadeOut('slow');
      setTimeout(function() {
        popupContent(2);
        $('.popup').css('width','500px');
      }, 200);
    }, 600);

  });
}

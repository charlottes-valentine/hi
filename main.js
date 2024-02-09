// hi
// <3

// messy code for my messy love 

let arrImgs = [
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843570348752926/IMG_0623_Original.jpg?ex=65ceee5e&is=65bc795e&hm=29aed33718b7855554c83e1fb61eb4e685a1f966f478306d373cbb4e2e712363&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843569526677504/IMG_5474_Original.jpg?ex=65ceee5e&is=65bc795e&hm=d1d6d249890b89eca7dfbed2aa1f33b688d341fcccad335aceaabca6b584c1c4&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843569040392202/IMG_2015_Original.jpg?ex=65ceee5e&is=65bc795e&hm=308129a8b0065ad7fee7f9324eca4e57ae5bfc4e4350a007b10e3aaf32fe94db&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843568230899752/IMG_9457_Original.jpg?ex=65ceee5e&is=65bc795e&hm=5d3e6658c5efa02d44db33403c764a3fbeb3517c0fefd9a6aa4fd214d3c0efcd&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843567366742046/IMG_1565_Original.jpg?ex=65ceee5e&is=65bc795e&hm=a807bd1a63eace3bbc4f8e23a68f38ed53adcff250bddf50e97d23dacb28e4cf&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843566808895529/IMG_1564_Original.jpg?ex=65ceee5e&is=65bc795e&hm=9a58e890c501a1ff10760106caf23f664b5611e95afdf639a992de9dcc38b32c&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843565613514752/IMG_1624.jpg?ex=65ceee5d&is=65bc795d&hm=50a96c01611bf7c644622994a39cc0caae0ee211672a257234e4ded27e83c78d&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843564862603295/IMG_3631.jpg?ex=65ceee5d&is=65bc795d&hm=d50ad3f8e9aa96b49bbb33513114a5d9b57ea74c5f7cb790e888b46d03d66a09&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843440396767232/IMG_0139.jpg?ex=65ceee3f&is=65bc793f&hm=83a55ef20120fb1b3ac6fb089f694410bc863c4035fc01292903597fbeb9db43&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843439851642880/IMG_0468.jpg?ex=65ceee3f&is=65bc793f&hm=d7b43e27cc65e8c2602a17d4ebca36816df67a93dd369ca0e9f281320f0d25a0&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843439192866866/IMG_0521.jpg?ex=65ceee3f&is=65bc793f&hm=62018f3219000b344f1316ee7321429df83d6f6b72f09ea06815e14ee20bd47c&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843438639358032/IMG_0763.jpg?ex=65ceee3f&is=65bc793f&hm=39f57b623748a8a39876abe68153db2ef7235d7a270a90cd4736e943b4b2b458&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843438031175810/IMG_5018.jpg?ex=65ceee3f&is=65bc793f&hm=0b4ae51a28275c5d7e6fc688d3ae161eec2bda28322e39d2c8cc98c8c92d0955&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843437326663720/IMG_1338.jpg?ex=65ceee3f&is=65bc793f&hm=6a1bdd546aba83abeac38e7c3a9db63bafd91aa770fe6ae25e28e3277527a60e&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843436768567306/IMG_5162.jpg?ex=65ceee3f&is=65bc793f&hm=2861f16273781fcf84c733f36087fcc9f3d9db8abae8336a7a58401e1ef5e229&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843436051333170/IMG_2561.jpg?ex=65ceee3e&is=65bc793e&hm=c3a58eadd035f5e6776ee3b362364766a9f71e3258ea772ccec4b776ec53d040&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843435439099934/IMG_2546.jpg?ex=65ceee3e&is=65bc793e&hm=cb11ae023617f668374ca57abd4605b66712a2b122ae322007cdc0dbd922d9d1&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843434763952168/IMG_2264.jpg?ex=65ceee3e&is=65bc793e&hm=27c340cccd7a31c0ac2b2a46be2fbb20d0f3bbe384639fa622029f96c9419cec&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843258892455996/IMG_3024.jpg?ex=65ceee14&is=65bc7914&hm=c9d3d023049a6669ffe34444db5555710da4ae09db5c5b5cccf43098ae48c04e&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843257956999189/IMG_3062.jpg?ex=65ceee14&is=65bc7914&hm=543fc82b0ceba16447bae6ee7c23987270c8858575ca49b591dc679c6dd9c3ab&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843257168592946/IMG_3084.jpg?ex=65ceee14&is=65bc7914&hm=3c2ee3f0166c3fdc5cb902c4a5df1f8b6305034896e025ae344580b3673ea600&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843256476667945/IMG_4143.jpg?ex=65ceee14&is=65bc7914&hm=b8d21952599e1f46eeec95fa515b1e1d4e98759e82a75a05aada0d81ab135b18&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843255616573460/IMG_4649.jpg?ex=65ceee13&is=65bc7913&hm=9a1b143243352c374e017f167773d9d67cedef72b3913576add781e7db422cdf&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843254672990238/IMG_4752.jpg?ex=65ceee13&is=65bc7913&hm=0897027b41b9848baabe3dd4952df5515f52d016273746c5d21e232bed21c9b8&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843253758492672/IMG_5151.jpg?ex=65ceee13&is=65bc7913&hm=c4af9f6ed55a7c8293bde58855133adb03828eded1d621533926761a5e185c61&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843253112578058/IMG_5137.jpg?ex=65ceee13&is=65bc7913&hm=ea233fd6d992eb091c31ca660b2e9a8b57f3dc520b9b267ba00f1c3ecca7ea9c&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843012657586176/IMG_6264.jpg?ex=65ceedd9&is=65bc78d9&hm=ef78aeeb370eecbc90fd78237ac8e193abbfde803d4e8e7bb1964c4ddf4728f6&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843011831300176/IMG_6843.jpg?ex=65ceedd9&is=65bc78d9&hm=13ee980ea036141b125ff12053be167ff9e52d0a2b9f80e87c2a3c53b5a311a1&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843011180929054/IMG_3050.jpg?ex=65ceedd9&is=65bc78d9&hm=e0ae778fc105da99e65744827858bf3deeed0735f038f907f5568141d5d9420a&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843010463961129/IMG_8232.jpg?ex=65ceedd9&is=65bc78d9&hm=f50eba2b7130969e26027e143e0c4a0669540e79c1fb8555e6df54d35b81e08d&", // one replacing above
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843009872433192/DSCF0222.jpg?ex=65ceedd9&is=65bc78d9&hm=fe61bd2443719995fc7478d19a60dfbb53b2085de650529df25f9d777d9d2d18&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843009343955064/IMG_4312.jpg?ex=65ceedd9&is=65bc78d9&hm=3fc0ad8c6cb8232553068fd0843af0e35aea57f98f3a98279e47b70f94979737&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843008639176704/IMG_4646.jpg?ex=65ceedd9&is=65bc78d9&hm=61696567989192eaa93f60e8ce271ea56c5a070a6eb56c04e773b1aeef9982ec&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843007964151858/IMG_4672.jpg?ex=65ceedd8&is=65bc78d8&hm=d9c322c345b36cdcf84e87859a781ba306bea9b2874d7e6f63a4f29c99108823&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843007477358602/IMG_4739.jpg?ex=65ceedd8&is=65bc78d8&hm=332d99bbe69d1d953b02c5339eeb0c0e029f289604439625da2fe0eca1de3cd0&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202843006810456094/IMG_4763.jpg?ex=65ceedd8&is=65bc78d8&hm=b5913f72f24f3533cda80e3e60e5cfb880c1c69f78c9c2369776b5f0450fd5f9&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202842755659989012/IMG_5350.jpg?ex=65ceed9c&is=65bc789c&hm=f1aa238ca42c7f8689e6ca8a77fdd64b432f0a0992442ddd5051ce508b645d04&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202842755022200872/IMG_5476.jpg?ex=65ceed9c&is=65bc789c&hm=9ebe9c5ec5f636e24dacbb688508641beb6396a8b284be43f8d654d55f684a4a&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202842754477203516/IMG_5497.jpg?ex=65ceed9c&is=65bc789c&hm=34cd2deec5bbc4a0a16be50ab96c5586f51a269b24c32ed1c33c5735942d3b86&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202842753843732490/IMG_5675.jpg?ex=65ceed9c&is=65bc789c&hm=bfc19405e5ea8027058f4ddc5904e8d883bee8264eaa311266220fcc10591013&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202842752828702810/IMG_9621.jpg?ex=65ceed9c&is=65bc789c&hm=500053fefcc8f68355fcda796cd5ea552c5737752bbe011528a5ed98fb8d2733&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202842752501551164/IMG_6390.jpg?ex=65ceed9b&is=65bc789b&hm=bb02646cd12789271676d6deb7f3662b361015ea04c17ea24d9e34ddb3420630&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202842751843176468/IMG_6488.jpg?ex=65ceed9b&is=65bc789b&hm=688043157da8b5ef30486716b1efdcf9274df39daf7494a4ba89996a8e7eafe0&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202842751213764608/IMG_6705.jpg?ex=65ceed9b&is=65bc789b&hm=293c66b7a34c45c040fa449a8c90443ed949afa4f992e12513cd00de56085c96&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1202842750488412160/IMG_7649.jpg?ex=65ceed9b&is=65bc789b&hm=90bbbcfecbb8a68436ebf3fb286b24f3f035057aab6ab5aa6ca2b3f3ca3ff5e1&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398290129100801/IMG_2489_Original.jpg?ex=65d839a3&is=65c5c4a3&hm=ad43cbd5944441cb6396250152831055c2461f844fe214a61dbd796f3fc5f807&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398290649325608/IMG_3536_Original.jpg?ex=65d839a3&is=65c5c4a3&hm=3821c12e947ea7f362e38f0d17ddfdc83f78d31c6da2604026d4c5cc1e2bd86d&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398291328798770/IMG_1829_Original.jpg?ex=65d839a3&is=65c5c4a3&hm=da296f9aa03bcb9bc35de1219ef69c7944b15f79a4fc326e7a2e7b184284a076&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398291882442792/IMG_2652_Original.jpg?ex=65d839a4&is=65c5c4a4&hm=3d6b3560505a4fd85511fbea93deee26ccbfe7d25e330c3c47d3095d7ca23d82&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398292465192970/IMG_0385_Original.jpg?ex=65d839a4&is=65c5c4a4&hm=07e3d3793f8f3ae6b79e4030a32139cd96cd934b7df30c2f6e6bb0bec947034b&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398293107048448/IMG_1420_Original.jpg?ex=65d839a4&is=65c5c4a4&hm=286ee59f10e139af9342c866051b25d0ddb5f96ae3dddcfadd743a78f0635808&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398293895446529/IMG_1861_Original.jpg?ex=65d839a4&is=65c5c4a4&hm=d945f66826d62ada451040cd5e28621a979c75c897c96363de7cf3b58013fc0f&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398354188832768/IMG_3149_Original.jpg?ex=65d839b2&is=65c5c4b2&hm=bf769da1d201f56b6354c63424bc715e6b04accb6541577e1e41dcb369bef1e7&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398355052863488/IMG_2483_Original.jpg?ex=65d839b3&is=65c5c4b3&hm=b8cd3e62c58cb3b159f54bdb1e19353927285803dd30b135e85c759fa412b11e&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398356466208838/IMG_2349_Original.jpg?ex=65d839b3&is=65c5c4b3&hm=76daca0d77c38091c72c6baed53b219037e8f5055e4fb11ce47d70807ab09867&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398357212659712/IMG_9132_Original.jpg?ex=65d839b3&is=65c5c4b3&hm=0d8462462d47f19a01bd6344c55236ee0d5912b516e52db354fcae6222b63116&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398358093467658/IMG_1090_Original.jpg?ex=65d839b3&is=65c5c4b3&hm=3001f333920b6f72293c2dee8a94610fe890e964040d7023bea3d39a859ad064&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398358768885780/IMG_4631_Original.jpg?ex=65d839b3&is=65c5c4b3&hm=9d0032729296599e47b141abb593ec4e0f9df3f59da13280182372b24546a1ec&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398360631287889/IMG_4012_Original.jpg?ex=65d839b4&is=65c5c4b4&hm=30e3edef6237b699f27a2c11c8e388071268dafba3f23daebec09cb0d4e5fef5&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398361977524224/IMG_4686_Original.jpg?ex=65d839b4&is=65c5c4b4&hm=f13cff2ff88090e7be39f5e6d3d2c4e02b49817ff642b7b394e995c332baad41&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398397184507964/IMG_2751_Original.jpg?ex=65d839bd&is=65c5c4bd&hm=fe6ba8cb611c6543c6c05e2d2100c8c54bea7a13840ba98b5d8d57fab4f35636&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398397876707368/IMG_1187_Original.jpg?ex=65d839bd&is=65c5c4bd&hm=612623f4abec6f1e010d05bc5e4579aced3e50ef59089587270b61588ec2bb94&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398399088853042/IMG_1247_Original.jpg?ex=65d839bd&is=65c5c4bd&hm=662a5748e0daf9c0d5c7af5ef111110f3ad4104fcfee74cd4b3a2ecb2067e00a&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398399696904212/IMG_3431_Original.jpg?ex=65d839bd&is=65c5c4bd&hm=2e284973fee622a8f917778a0b2803fdc678121b7dbbda6e51fed337fba99524&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398400401412106/IMG_7987_Original.jpg?ex=65d839bd&is=65c5c4bd&hm=635ea92997aaf38844ed3a52347735a06d53ee719621b6a63cafe1ce1d0bb26d&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398400980222012/IMG_3834_Original.jpg?ex=65d839be&is=65c5c4be&hm=3f02e93088b36a3dcbd1eb022da0dc4a9b6958b3a6c79b029ee6d44c6cf76b35&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398401534136350/IMG_4017_Original.jpg?ex=65d839be&is=65c5c4be&hm=32920281a119a4cea8b9b97fee7eae386683c25e195f741df78c1494b85a40aa&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398402242838528/IMG_3562_Original.jpg?ex=65d839be&is=65c5c4be&hm=1c30dc57ead40921b13fbe2c32068b04d3921cd3745928074e87d7c23b01a558&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398422518235136/IMG_0547_Original.jpg?ex=65d839c3&is=65c5c4c3&hm=1d1ff1738220562cdb9bb6f58e5bef06bd1187e3ae33e47fb4948a0a9640b872&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398421515804712/IMG_0137_Original.jpg?ex=65d839c2&is=65c5c4c2&hm=c01de6d1520de815ab171b1c5f380379feb2acb25ed9079bd07c2038e24fa867&",
    "https://cdn.discordapp.com/attachments/884943322513301571/1205398420936986705/IMG_2459_Original.jpg?ex=65d839c2&is=65c5c4c2&hm=08bb76475f6b07890b951761f21757220e5afa6bba724ff9eb88416a9e16c692&",
]

console.log("😹");

let letter = document.querySelector("#letter");
const unravelAudio = document.querySelector("#unravel");
const lolAudio = document.querySelector("#lol");
const charlotteUNRAVEL = "./will.png"
const charlotteTROLL = "https://media.discordapp.net/attachments/884943322513301571/1202842479926185984/lp_image.jpg?ex=65ceed5a&is=65bc785a&hm=f6c51cb9ba9834abddd3defedf7392238c08a8107ca42a9269c6c252745f2790&=&format=webp&width=514&height=1116";

function changePic(val) {
    let buttImg = document.querySelector("#butt").children[0];
    if (val)
        buttImg.src = "https://cdn.discordapp.com/attachments/884943322513301571/1202843567366742046/IMG_1565_Original.jpg?ex=65d828de&is=65c5b3de&hm=1e338ff8d0f50a78345116662c59e69067df5ff55ec1eb2180bfda56c7381bd5&"
    else
        buttImg.src = "https://cdn.discordapp.com/attachments/884943322513301571/1202843566808895529/IMG_1564_Original.jpg?ex=65d828de&is=65c5b3de&hm=57d0a5f1c9b4b90daad2a4e8585d6701dcd1f28e7fd131369f3a6ed02ec928d3&"
}

async function redirect() {

    await UNRAVELMODE();
    /*
    idx = 0
    const interval = setInterval(async () => {
        insertImg(createImg(arrImgs[idx], "charlotte"));
        idx += 1
    }, 50);
    */

    setTimeout(() => {
        unravelAudio.pause();
        love();
    }, 3600);

}

function UNRAVELMODE() {
    return new Promise((resolve) => {
        letter.style.display = "none";

        const charlotteImg = createImg(charlotteUNRAVEL, "charlotteBig")
        charlotteImg.style.position = "fixed";
        charlotteImg.style.width = "600px";
        charlotteImg.style.top = "10%";
        charlotteImg.style.left = "10%";

        charlotteImg.setAttribute("data-aos", "zoom-in-up");
        charlotteImg.setAttribute("data-aos-duration", "90000");

        document.body.insertBefore(charlotteImg, letter);

        unravelAudio.play();

        idx = 0
        let interval;

        const shuffledArr = arrImgs.sort((a, b) => 0.5 - Math.random());

        setTimeout(() => {
            interval = setInterval(async () => {
                insertImg(createImg(arrImgs[idx], "charlotte"));
                idx += 1
            }, 400);
        }, 3500)
            


        setTimeout(() => {
            clearInterval(interval);
            resolve();
        }, 32500)
    })
}

function love() {
    let charlotteBig = document.querySelector(".charlotteBig");
    charlotteBig.src = "https://media.discordapp.net/attachments/884943322513301571/955662759058620486/2DAD00DB-33C6-409D-AE69-B7495F603350.jpg?width=755&height=676";

    let images = document.querySelectorAll(".charlotte");
    setTimeout(async () => {
        charlotteBig.style.display = "none";

        const shuffledArr = arrImgs.sort((a, b) => 0.5 - Math.random());

        lolAudio.play();

        for (let i = 0; i < images.length; i++) {
            await replaceTroll(images[i], charlotteTROLL);
        }
    }, 2000);

    setTimeout(() => {
        const h1 = document.createElement("h1");
        h1.textContent = "Valentine";
        h1.style.color = "white";
        h1.style.textShadow = "2px 2px pink"
        h1.style.position = "fixed";
        h1.style.top = "30%";
        h1.style.left = "35%";
        h1.style.transform = "translate(-50%, -50%)";

        const h1Onemonth = document.createElement("h1");
        h1Onemonth.textContent = "<33 - Justin";
        h1Onemonth.style.color = "white";
        h1Onemonth.style.textShadow = "2px 2px pink"
        h1Onemonth.style.position = "fixed";
        h1Onemonth.style.top = "43%";
        h1Onemonth.style.left = "35%";
        h1Onemonth.style.transform = "translate(-50%, -50%)";

        document.body.insertBefore(h1, letter);
        document.body.insertBefore(h1Onemonth, letter);

    }, 11500);
}

function replaceTroll(img, imgToReplace)
{
    return new Promise((resolve) => {
        img.src = imgToReplace;
        img.scrollIntoView({behavior: "auto", block: "end", inline: "nearest"});

        setTimeout(() => {
            resolve();
        }, 125)
    })
}


function insertImg(img) {
    img.style.width = "160px";
    document.body.insertBefore(img, letter);
    img.scrollIntoView({behavior: "auto", block: "end", inline: "nearest"});
}

function createImg(link, className) {
    const img = document.createElement("img");
    img.className = className;
    img.src = link;
    return img;
}  
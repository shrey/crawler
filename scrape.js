const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

// // request('https://inc42.com/sitemap_index.xml', (error,response, html) => {
// //     if(!error && response.statusCode == 200){
// //         const $ = cheerio.load(html);

// //         const loc = $('loc')
// //         const urls = [];
// //         const dates = [];
// //         loc.map(function(i,el){
// //             const link = $(el).text();
// //             urls.push(link);
// //         })
// //         const lastmod = $('lastmod');
// //         lastmod.map(function(i,el){
// //             const date = $(el).text()
// //             dates.push(Date.parse(date));

// //         })
// //         // console.log(dates);

// //     }
// // })

// function traverse(start,end,url){
//     request(url,(error,response,html) => {
//         if(!error && response.statusCode == 200){
//             const $ = cheerio.load(html);
//             const loc = $('loc');

//         }
//     })
// }

// function traverse_first(url) {
//     request(url, (error,response,html) => {
//         if(!error && response.statusCode == 200){
//             const $ = cheerio.load(html);
//             const loc = $('loc');
//             loc.map((function(i,el){
//             traverse_second($(el).text());
//         }))
//         }
//     })
// }

// function traverse_second(url){
//     request(url, (error,response,html) => {
//         if(!error && response.statusCode == 200){
//             const $ = cheerio.load(html);
//             const h2 = $('h2');
//             h2.map(function(i,el){
//                 console.log($(el).text());
//             })
//         }
//     })
// }

// traverse_first('https://inc42.com/post-sitemap6.xml');

// request('https://wordpandit.com/austere/',(error,response,html) => {
//     if(!error && response.statusCode == 200){
//        console.log(error);
//     }
//     const $ = cheerio.load(html);
//     const img = $('p strong a img');
//     console.log(img.attr('src'));

// })

// let map = {};

// let wordList = ['austere','abase','good'];
// for(var i = 0; i<wordList.length; i++){
//     let url = "https://wordpandit.com/" + wordList[i] + '/';
//     request(url,(error,response,html) => {
//         if(!error && response.statusCode == 200){
//             console.log(error);
//             continue;
//         }
//         const $ = cheerio.load(html);
//         const img = $('p strong a img');
//         map[wordList[i]] = img.attr('src');
//     })
// }
// for(let key in map){

// }



// request('http://www.pixnary.com/greImages/bittu.jpg', (error,response,html) => {
//     if(error && response.statusCode!==200){
//         console.log(error);
//         // console.log("ERROR");
//         // console.log(error)
//     }
//     const $ = cheerio.load(html);
//     if($('div').html() == null){
//         console.log("there");
//     }
//     else{
//         console.log("not there")
//     }

//     // console.log(html);
// })



let obj = {
    "aesthetic": 0,
    "alacrity": 1,
    "archaic": 2,
    "ascetic": 3,
    "assuage": 4,
    "audacious": 5,
    "austere": 6,
    "banal": 7,
    "capricious": 8,
    "censure": 9,
    "coalesce": 10,
    "craven": 11,
    "demur": 12,
    "deride": 13,
    "derivative": 14,
    "diatribe": 15,
    "didactic": 16,
    "diffident": 17,
    "disparate": 18,
    "ephemeral": 19,
    "eschew": 20,
    "esoteric": 21,
    "facetious": 22,
    "fortuitous": 23,
    "garrulous": 24,
    "hackneyed": 25,
    "immutable": 26,
    "inimical": 27,
    "insipid": 28,
    "irascible": 29,
    "laconic": 30,
    "lucid": 31,
    "malleable": 32,
    "mercurial": 33,
    "meticulous": 34,
    "mitigate": 35,
    "obsequious": 36,
    "obstinate": 37,
    "opaque": 38,
    "perfunctory": 39,
    "phlegmatic": 40,
    "platitude": 41,
    "pristine": 42,
    "prodigal": 43,
    "recondite": 44,
    "refute": 45,
    "repudiate": 46,
    "reticent": 47,
    "sedulous": 48,
    "soporific": 49,
    "taciturn": 50,
    "abjure": 51,
    "acumen": 52,
    "advocate": 53,
    "ameliorate": 54,
    "amenable": 55,
    "approbation": 56,
    "arcane": 57,
    "arduous": 58,
    "artless": 59,
    "attenuate": 60,
    "augment": 61,
    "benign": 62,
    "bucolic": 63,
    "burgeon": 64,
    "calumny": 65,
    "castigate": 66,
    "chicanery": 67,
    "cogent": 68,
    "commensurate": 69,
    "contrite": 70,
    "copious": 71,
    "corroborate": 72,
    "denigrate": 73,
    "dilatory": 74,
    "dissemble": 75,
    "dupe": 76,
    "ebullient": 77,
    "eclectic": 78,
    "egregious": 79,
    "empirical": 80,
    "emulate": 81,
    "engender": 82,
    "erudite": 83,
    "exacerbate": 84,
    "exonerate": 85,
    "extraneous": 86,
    "fastidious": 87,
    "foment": 88,
    "fractious": 89,
    "gainsay": 90,
    "germane": 91,
    "glib": 92,
    "gregarious": 93,
    "harangue": 94,
    "impetuous": 95,
    "implacable": 96,
    "impugn": 97,
    "ingenuous": 98,
    "innocuous": 99,
    "insular": 100,
    "intransigent": 101,
    "intrepid": 102,
    "loquacious": 103,
    "mollify": 104,
    "mundane": 105,
    "munificent": 106,
    "nascent": 107,
    "obdurate": 108,
    "opprobrium": 109,
    "ostentatious": 110,
    "paucity": 111,
    "pedantic": 112,
    "pedestrian": 113,
    "pernicious": 114,
    "pervasive": 115,
    "placate": 116,
    "pragmatic": 117,
    "precarious": 118,
    "precipitate": 119,
    "predilection": 120,
    "prevaricate": 121,
    "probity": 122,
    "prodigious": 123,
    "profligate": 124,
    "proliferate": 125,
    "prosaic": 126,
    "puerile": 127,
    "pugnacious": 128,
    "quixotic": 129,
    "quotidian": 130,
    "reproach": 131,
    "salubrious": 132,
    "sanction": 133,
    "sanguine": 134,
    "solicitous": 135,
    "specious": 136,
    "spurious": 137,
    "supplant": 138,
    "sycophant": 139,
    "timorous": 140,
    "tirade": 141,
    "tortuous": 142,
    "ubiquitous": 143,
    "umbrage": 144,
    "vacillate": 145,
    "whimsical": 146,
    "abate": 147,
    "aberrant": 148,
    "abstain": 149,
    "acerbic": 150,
    "admonish": 151,
    "adulterate": 152,
    "affable": 153,
    "affectation": 154,
    "aggrandize": 155,
    "amalgamate": 156,
    "anodyne": 157,
    "anomaly": 158,
    "antipathy": 159,
    "apathy": 160,
    "apocryphal": 161,
    "arbitrary": 162,
    "assail": 163,
    "avarice": 164,
    "belie": 165,
    "blithe": 166,
    "bolster": 167,
    "buttress": 168,
    "byzantine": 169,
    "cacophony": 170,
    "canard": 171,
    "caustic": 172,
    "churlish": 173,
    "circumspect": 174,
    "confound": 175,
    "connoisseur": 176,
    "conspicuous": 177,
    "contentious": 178,
    "convoluted": 179,
    "cosmopolitan": 180,
    "deleterious": 181,
    "desiccate": 182,
    "desultory": 183,
    "dilettante": 184,
    "disabuse": 185,
    "discrepancy": 186,
    "disingenuous": 187,
    "disparage": 188,
    "disseminate": 189,
    "dogmatic": 190,
    "eccentric": 191,
    "effrontery": 192,
    "elicit": 193,
    "eminent": 194,
    "enervate": 195,
    "equivocate": 196,
    "estimable": 197,
    "evanescent": 198,
    "exacting": 199,
    "exculpate": 200,
    "expurgate": 201,
    "extrapolate": 202,
    "fawn": 203,
    "fecund": 204,
    "forestall": 205,
    "furtive": 206,
    "gauche": 207,
    "hegemony": 208,
    "iconoclast": 209,
    "idiosyncrasy": 210,
    "imperious": 211,
    "imperturbable": 212,
    "implicit": 213,
    "inchoate": 214,
    "indefatigable": 215,
    "indolent": 216,
    "inscrutable": 217,
    "intimate": 218,
    "inundate": 219,
    "invidious": 220,
    "irresolute": 221,
    "lachrymose": 222,
    "languid": 223,
    "laudable": 224,
    "limpid": 225,
    "lugubrious": 226,
    "maverick": 227,
    "mendacity": 228,
    "mendicant": 229,
    "misanthrope": 230,
    "morose": 231,
    "myopic": 232,
    "nadir": 233,
    "neophyte": 234,
    "noisome": 235,
    "nonplussed": 236,
    "nuance": 237,
    "obstreperous": 238,
    "obviate": 239,
    "officious": 240,
    "onerous": 241,
    "panacea": 242,
    "panache": 243,
    "pariah": 244,
    "parsimonious": 245,
    "partisan": 246,
    "patent": 247,
    "perennial": 248,
    "perfidy": 249,
    "peripatetic": 250,
    "peripheral": 251,
    "petulant": 252,
    "pith": 253,
    "presumptuous": 254,
    "proclivity": 255,
    "profuse": 256,
    "propensity": 257,
    "propitiate": 258,
    "propriety": 259,
    "provincial": 260,
    "prudent": 261,
    "punctilious": 262,
    "querulous": 263,
    "replete": 264,
    "rescind": 265,
    "restive": 266,
    "reverent": 267,
    "sagacious": 268,
    "sporadic": 269,
    "stolid": 270,
    "surreptitious": 271,
    "tendentious": 272,
    "tractable": 273,
    "truculent": 274,
    "turgid": 275,
    "turpitude": 276,
    "undermine": 277,
    "underscore": 278,
    "untenable": 279,
    "upbraid": 280,
    "venerate": 281,
    "veracity": 282,
    "verbose": 283,
    "vociferous": 284,
    "volatile": 285,
    "accretion": 286,
    "acme": 287,
    "adroit": 288,
    "alleviate": 289,
    "ambiguous": 290,
    "ambivalent": 291,
    "amortize": 292,
    "anachronism": 293,
    "analogous": 294,
    "apostate": 295,
    "appease": 296,
    "arrogate": 297,
    "articulate": 298,
    "asperity": 299,
    "assiduous": 300,
    "august": 301,
    "auspicious": 302,
    "aver": 303,
    "base": 304,
    "brazen": 305,
    "brook": 306,
    "candid": 307,
    "cardinal": 308,
    "catalyst": 309,
    "cavalier": 310,
    "collusion": 311,
    "condone": 312,
    "construe": 313,
    "contumacious": 314,
    "covert": 315,
    "credulous": 316,
    "cumbersome": 317,
    "cupidity": 318,
    "curmudgeon": 319,
    "dearth": 320,
    "debunk": 321,
    "decorous": 322,
    "deference": 323,
    "delineate": 324,
    "diaphanous": 325,
    "dichotomy": 326,
    "dirge": 327,
    "discomfit": 328,
    "discreet": 329,
    "discrete": 330,
    "disinterested": 331,
    "dispassionate": 332,
    "droll": 333,
    "dubious": 334,
    "efficacious": 335,
    "elegy": 336,
    "elucidate": 337,
    "embellish": 338,
    "encomium": 339,
    "endemic": 340,
    "enumerate": 341,
    "equivocal": 342,
    "ersatz": 343,
    "espouse": 344,
    "eulogy": 345,
    "euphemism": 346,
    "exigent": 347,
    "extemporaneous": 348,
    "fallacious": 349,
    "fatuous": 350,
    "feckless": 351,
    "fetid": 352,
    "florid": 353,
    "frugal": 354,
    "genial": 355,
    "grovel": 356,
    "guile": 357,
    "halcyon": 358,
    "hermetic": 359,
    "histrionic": 360,
    "hodgepodge": 361,
    "hubris": 362,
    "ignoble": 363,
    "illusory": 364,
    "imminent": 365,
    "impecunious": 366,
    "impute": 367,
    "incipient": 368,
    "incorrigible": 369,
    "ineffable": 370,
    "inexorable": 371,
    "ingratiate": 372,
    "invective": 373,
    "inveigle": 374,
    "inveterate": 375,
    "itinerant": 376,
    "jettison": 377,
    "jingoism": 378,
    "judicious": 379,
    "juxtapose": 380,
    "lament": 381,
    "lampoon": 382,
    "largess": 383,
    "lassitude": 384,
    "latent": 385,
    "lethargic": 386,
    "levity": 387,
    "libertine": 388,
    "luminous": 389,
    "magnanimous": 390,
    "magnate": 391,
    "malevolent": 392,
    "malinger": 393,
    "maudlin": 394,
    "meretricious": 395,
    "miscreant": 396,
    "mordant": 397,
    "noxious": 398,
    "oblique": 399,
    "obscure": 400,
    "outstrip": 401,
    "palliate": 402,
    "panegyric": 403,
    "paragon": 404,
    "pellucid": 405,
    "penchant": 406,
    "peruse": 407,
    "philistine": 408,
    "pious": 409,
    "pithy": 410,
    "placid": 411,
    "plethora": 412,
    "polemical": 413,
    "posit": 414,
    "prattle": 415,
    "precursor": 416,
    "prescient": 417,
    "prolix": 418,
    "propagate": 419,
    "pusillanimous": 420,
    "quiescent": 421,
    "raconteur": 422,
    "recalcitrant": 423,
    "redress": 424,
    "refractory": 425,
    "relegate": 426,
    "remedial": 427,
    "reprobate": 428,
    "rhetoric": 429,
    "ribald": 430,
    "rudimentary": 431,
    "salient": 432,
    "sardonic": 433,
    "schism": 434,
    "scintillating": 435,
    "scrupulous": 436,
    "slake": 437,
    "solecism": 438,
    "spendthrift": 439,
    "squalid": 440,
    "subjective": 441,
    "subversive": 442,
    "superfluous": 443,
    "surfeit": 444,
    "surly": 445,
    "sybarite": 446,
    "tacit": 447,
    "tawdry": 448,
    "temperance": 449,
    "tenuous": 450,
    "terse": 451,
    "torpor": 452,
    "transient": 453,
    "transitory": 454,
    "trenchant": 455,
    "urbane": 456,
    "verisimilitude": 457,
    "vestige": 458,
    "virulent": 459,
    "vitiate": 460,
    "vitriolic": 461,
    "wane": 462,
    "wizened": 463,
    "zealous": 464,
    "zenith": 465,
    "abeyance": 466,
    "abrasive": 467,
    "abrogate": 468,
    "abscission": 469,
    "abscond": 470,
    "abstruse": 471,
    "abysmal": 472,
    "accolade": 473,
    "acidulous": 474,
    "amiable": 475,
    "amorphous": 476,
    "anachronistic": 477,
    "anathema": 478,
    "animosity": 479,
    "anoint": 480,
    "anomalous": 481,
    "antedate": 482,
    "antithesis": 483,
    "antithetical": 484,
    "apotheosis": 485,
    "apposite": 486,
    "appropriate": 487,
    "ascertain": 488,
    "ascribe": 489,
    "astute": 490,
    "augury": 491,
    "avaricious": 492,
    "aversion": 493,
    "avid": 494,
    "baleful": 495,
    "bellicose": 496,
    "belligerent": 497,
    "beneficent": 498,
    "bent": 499,
    "bonhomie": 500,
    "boor": 501,
    "bromide": 502,
    "burnish": 503,
    "cajole": 504,
    "canonical": 505,
    "capitulate": 506,
    "catholic": 507,
    "celerity": 508,
    "cerebral": 509,
    "chagrin": 510,
    "chary": 511,
    "choleric": 512,
    "chronological": 513,
    "circumscribe": 514,
    "clandestine": 515,
    "cloying": 516,
    "complacent": 517,
    "complementary": 518,
    "conciliatory": 519,
    "concomitant": 520,
    "conflagration": 521,
    "conflate": 522,
    "consummate": 523,
    "conundrum": 524,
    "coterie": 525,
    "countenance": 526,
    "covet": 527,
    "credence": 528,
    "cynical": 529,
    "daunt": 530,
    "decorum": 531,
    "deflect": 532,
    "demagogue": 533,
    "despot": 534,
    "diffuse": 535,
    "dispatch": 536,
    "dissolution": 537,
    "dissonance": 538,
    "distill": 539,
    "dither": 540,
    "diurnal": 541,
    "doctrinaire": 542,
    "dogma": 543,
    "dolorous": 544,
    "dyspeptic": 545,
    "edify": 546,
    "effusive": 547,
    "egalitarian": 548,
    "eloquent": 549,
    "emollient": 550,
    "enigmatic": 551,
    "epicure": 552,
    "equanimity": 553,
    "equitable": 554,
    "eradicate": 555,
    "erratic": 556,
    "ethereal": 557,
    "euphony": 558,
    "exegesis": 559,
    "exorbitant": 560,
    "expatiate": 561,
    "expedient": 562,
    "exponent": 563,
    "extant": 564,
    "extol": 565,
    "facilitate": 566,
    "fallible": 567,
    "fallow": 568,
    "fervid": 569,
    "flag": 570,
    "flippant": 571,
    "flounder": 572,
    "flout": 573,
    "foible": 574,
    "ford": 575,
    "fracas": 576,
    "frenetic": 577,
    "frivolous": 578,
    "fulminate": 579,
    "futile": 580,
    "gaffe": 581,
    "galvanize": 582,
    "gambit": 583,
    "gambol": 584,
    "garner": 585,
    "goad": 586,
    "gossamer": 587,
    "grandiloquent": 588,
    "grouse": 589,
    "hapless": 590,
    "harrow": 591,
    "heterodox": 592,
    "heterogeneous": 593,
    "hoary": 594,
    "homogeneous": 595,
    "humdrum": 596,
    "hyperbole": 597,
    "iconoclastic": 598,
    "ignominious": 599,
    "imbroglio": 600,
    "immure": 601,
    "impair": 602,
    "impassive": 603,
    "impede": 604,
    "impervious": 605,
    "impudent": 606,
    "inadvertent": 607,
    "incongruous": 608,
    "inculcate": 609,
    "incumbent": 610,
    "indigenous": 611,
    "indignant": 612,
    "industrious": 613,
    "ineluctable": 614,
    "inherent": 615,
    "inimitable": 616,
    "iniquity": 617,
    "intractable": 618,
    "intrinsic": 619,
    "inure": 620,
    "inviolate": 621,
    "jargon": 622,
    "jejune": 623,
    "jocular": 624,
    "kindle": 625,
    "laud": 626,
    "lax": 627,
    "legerdemain": 628,
    "licentious": 629,
    "lionize": 630,
    "listless": 631,
    "lumber": 632,
    "maelstrom": 633,
    "magisterial": 634,
    "makeshift": 635,
    "malfeasance": 636,
    "malign": 637,
    "manifest": 638,
    "martial": 639,
    "martinet": 640,
    "mawkish": 641,
    "maxim": 642,
    "mellifluous": 643,
    "militate": 644,
    "miserly": 645,
    "modest": 646,
    "modicum": 647,
    "modish": 648,
    "monastic": 649,
    "mores": 650,
    "moribund": 651,
    "multifarious": 652,
    "myriad": 653,
    "naïve": 654,
    "nebulous": 655,
    "neologism": 656,
    "nettle": 657,
    "nominal": 658,
    "nonchalant": 659,
    "novel": 660,
    "obtuse": 661,
    "occlude": 662,
    "occult": 663,
    "odious": 664,
    "offset": 665,
    "opine": 666,
    "ornate": 667,
    "orthodox": 668,
    "oscillate": 669,
    "ossify": 670,
    "overshadow": 671,
    "overweening": 672,
    "painstaking": 673,
    "palatial": 674,
    "pallid": 675,
    "paradigm": 676,
    "paradox": 677,
    "parley": 678,
    "parochial": 679,
    "parody": 680,
    "parry": 681,
    "partial": 682,
    "pastiche": 683,
    "peccadillo": 684,
    "pejorative": 685,
    "penitent": 686,
    "penurious": 687,
    "penury": 688,
    "peregrinate": 689,
    "peremptory": 690,
    "permeate": 691,
    "perspicacious": 692,
    "pertinent": 693,
    "picayune": 694,
    "pillory": 695,
    "piquant": 696,
    "plaintive": 697,
    "plastic": 698,
    "plausible": 699,
    "pliant": 700,
    "plucky": 701,
    "plummet": 702,
    "poignant": 703,
    "polarize": 704,
    "polemic": 705,
    "politic": 706,
    "ponderous": 707,
    "precocious": 708,
    "profound": 709,
    "prolific": 710,
    "prophetic": 711,
    "propitious": 712,
    "proscribe": 713,
    "providential": 714,
    "pundit": 715,
    "pungent": 716,
    "quail": 717,
    "qualm": 718,
    "quandary": 719,
    "rancorous": 720,
    "rapacious": 721,
    "rarefied": 722,
    "raucous": 723,
    "recant": 724,
    "reconcile": 725,
    "recrudescent": 726,
    "redoubtable": 727,
    "refulgent": 728,
    "relish": 729,
    "remiss": 730,
    "renege": 731,
    "respite": 732,
    "robust": 733,
    "ruminate": 734,
    "sacrosanct": 735,
    "salutary": 736,
    "sanctimonious": 737,
    "sap": 738,
    "satiate": 739,
    "scathing": 740,
    "secular": 741,
    "sententious": 742,
    "sentient": 743,
    "shard": 744,
    "skittish": 745,
    "slight": 746,
    "somnolent": 747,
    "sophistry": 748,
    "sordid": 749,
    "sparse": 750,
    "spartan": 751,
    "splenetic": 752,
    "squelch": 753,
    "stalwart": 754,
    "staunch": 755,
    "stentorian": 756,
    "stoic": 757,
    "stringent": 758,
    "stultify": 759,
    "stymie": 760,
    "sublime": 761,
    "substantiate": 762,
    "subtle": 763,
    "supercilious": 764,
    "synoptic": 765,
    "tact": 766,
    "tangential": 767,
    "temerity": 768,
    "tempestuous": 769,
    "toady": 770,
    "torpid": 771,
    "tout": 772,
    "tranquil": 773,
    "transgression": 774,
    "travesty": 775,
    "trifling": 776,
    "trite": 777,
    "unconscionable": 778,
    "unprecedented": 779,
    "unseemly": 780,
    "untoward": 781,
    "usury": 782,
    "vacuous": 783,
    "variegated": 784,
    "venal": 785,
    "verdant": 786,
    "veritable": 787,
    "vexation": 788,
    "viable": 789,
    "vicissitude": 790,
    "vigilant": 791,
    "vilify": 792,
    "viscous": 793,
    "vituperate": 794,
    "voracious": 795,
    "wanton": 796,
    "wax": 797,
    "welter": 798,
    "wily": 799,
    "winsome": 800,
    "abase": 801,
    "abhor": 802,
    "abstemious": 803,
    "acquiesce": 804,
    "alchemy": 805,
    "aloof": 806,
    "apothegm": 807,
    "ardent": 808,
    "axiom": 809,
    "badger": 810,
    "balk": 811,
    "banish": 812,
    "bedlam": 813,
    "belittle": 814,
    "bemoan": 815,
    "benevolent": 816,
    "bereft": 817,
    "besiege": 818,
    "betray": 819,
    "brevity": 820,
    "callous": 821,
    "callow": 822,
    "canon": 823,
    "charlatan": 824,
    "chastise": 825,
    "chivalrous": 826,
    "clemency": 827,
    "cognizant": 828,
    "complaisant": 829,
    "compliant": 830,
    "complicit": 831,
    "concede": 832,
    "consternation": 833,
    "contemptuous": 834,
    "contend": 835,
    "coterminous": 836,
    "culminate": 837,
    "culpable": 838,
    "cursory": 839,
    "decry": 840,
    "deign": 841,
    "denounce": 842,
    "desecrate": 843,
    "diminutive": 844,
    "discern": 845,
    "divulge": 846,
    "dormant": 847,
    "draconian": 848,
    "duress": 849,
    "efficacy": 850,
    "effigy": 851,
    "ennui": 852,
    "enormity": 853,
    "entrenched": 854,
    "epitome": 855,
    "erroneous": 856,
    "excoriate": 857,
    "exhort": 858,
    "exposition": 859,
    "expound": 860,
    "expunge": 861,
    "extirpate": 862,
    "facile": 863,
    "fallacy": 864,
    "ferret": 865,
    "fervent": 866,
    "fidelity": 867,
    "flamboyant": 868,
    "forage": 869,
    "gratuitous": 870,
    "harbinger": 871,
    "harried": 872,
    "hedonist": 873,
    "heyday": 874,
    "hirsute": 875,
    "impasse": 876,
    "impediment": 877,
    "impermeable": 878,
    "impertinent": 879,
    "importune": 880,
    "impregnable": 881,
    "incessant": 882,
    "incisive": 883,
    "incredulous": 884,
    "insidious": 885,
    "intermittent": 886,
    "inveigh": 887,
    "irk": 888,
    "macabre": 889,
    "magnanimity": 890,
    "malodorous": 891,
    "mendacious": 892,
    "mercenary": 893,
    "milieu": 894,
    "misconstrue": 895,
    "misogynist": 896,
    "obloquy": 897,
    "ominous": 898,
    "opulent": 899,
    "ostensible": 900,
    "overt": 901,
    "paean": 902,
    "palatable": 903,
    "perturb": 904,
    "pittance": 905,
    "precipitous": 906,
    "preempt": 907,
    "puissance": 908,
    "raze": 909,
    "rebuke": 910,
    "remuneration": 911,
    "reprehensible": 912,
    "repugnant": 913,
    "rift": 914,
    "rustic": 915,
    "sangfroid": 916,
    "scant": 917,
    "scurrilous": 918,
    "solvent": 919,
    "sophomoric": 920,
    "sparing": 921,
    "subpoena": 922,
    "subterfuge": 923,
    "succinct": 924,
    "sully": 925,
    "supine": 926,
    "surmise": 927,
    "symbiosis": 928,
    "tantamount": 929,
    "truculence": 930,
    "unctuous": 931,
    "unequivocal": 932,
    "unscrupulous": 933,
    "vapid": 934,
    "venality": 935,
    "veracious": 936,
    "vernacular": 937,
    "vindicate": 938,
    "virtuoso": 939,
    "vitriol": 940,
    "volubility": 941,
    "wan": 942,
    "whet": 943,
    "abnegate": 944,
    "abomination": 945,
    "aboriginal": 946,
    "acrid": 947,
    "adherent": 948,
    "aegis": 949,
    "aesthete": 950,
    "aggravate": 951,
    "allege": 952,
    "arid": 953,
    "artful": 954,
    "artlessness": 955,
    "askance": 956,
    "assiduously": 957,
    "assimilate": 958,
    "banality": 959,
    "besmirch": 960,
    "blasé": 961,
    "bleak": 962,
    "bristle": 963,
    "brusque": 964,
    "brusquely": 965,
    "cacophonous": 966,
    "cadaverous": 967,
    "candor": 968,
    "chauvinistic": 969,
    "clamor": 970,
    "coercion": 971,
    "coercive": 972,
    "complaisance": 973,
    "congenial": 974,
    "contrition": 975,
    "contrive": 976,
    "debauchery": 977,
    "decimate": 978,
    "deft": 979,
    "demonstrative": 980,
    "despoiled": 981,
    "deviation": 982,
    "discerning": 983,
    "disdain": 984,
    "disseminated": 985,
    "dulcet": 986,
    "effervescent": 987,
    "elevate": 988,
    "emaciate": 989,
    "entice": 990,
    "epigram": 991,
    "epithet": 992,
    "err": 993,
    "euphoria": 994,
    "evince": 995,
    "exacerbated": 996,
    "exasperated": 997,
    "excoriated": 998,
    "exculpated": 999,
    "exult": 1000,
    "faction": 1001,
    "factious": 1002,
    "factitious": 1003,
    "fawning": 1004,
    "felicitious": 1005,
    "fickle": 1006,
    "fluke": 1007,
    "foil": 1008,
    "forfeit": 1009,
    "forlorn": 1010,
    "fortitude": 1011,
    "fret": 1012,
    "frugality": 1013,
    "gauntlet": 1014,
    "glean": 1015,
    "hamstrung": 1016,
    "hankering": 1017,
    "ignominy": 1018,
    "illicit": 1019,
    "impunity": 1020,
    "inclement": 1021,
    "indict": 1022,
    "indignation": 1023,
    "inerrancy": 1024,
    "inquest": 1025,
    "internecine": 1026,
    "ire": 1027,
    "irksome": 1028,
    "irreverent": 1029,
    "lacerate": 1030,
    "largesse": 1031,
    "livid": 1032,
    "meander": 1033,
    "melancholy": 1034,
    "metamorphosis": 1035,
    "misanthropic": 1036,
    "moot": 1037,
    "morbid": 1038,
    "nihilism": 1039,
    "nondescript": 1040,
    "notorious": 1041,
    "olfactory": 1042,
    "opulence": 1043,
    "ostensible or ostensive": 1044,
    "ostracize": 1045,
    "ostracized": 1046,
    "oust": 1047,
    "pacific": 1048,
    "pacify": 1049,
    "pall": 1050,
    "paroxysm": 1051,
    "pecuniary": 1052,
    "perilous": 1053,
    "perpetrate": 1054,
    "perverse": 1055,
    "pique": 1056,
    "ploy": 1057,
    "pre-empt": 1058,
    "premeditate": 1059,
    "premonition": 1060,
    "profane": 1061,
    "proficient": 1062,
    "prognostication": 1063,
    "puissant": 1064,
    "quip": 1065,
    "ramification": 1066,
    "ravenous": 1067,
    "rebut": 1068,
    "renaissance": 1069,
    "repertoire": 1070,
    "reverberate": 1071,
    "revile": 1072,
    "rhetorical": 1073,
    "rife": 1074,
    "scanty": 1075,
    "slack": 1076,
    "stern": 1077,
    "stymie or stymy": 1078,
    "subservient": 1079,
    "thwart": 1080,
    "uncanny": 1081,
    "unkempt": 1082,
    "utopian": 1083,
    "veneration": 1084,
    "venial": 1085,
    "vituperated": 1086,
    "wayward": 1087,
    "wheedle": 1088,
    "volition": 1089,
    "aberration": 1090,
    "adamant": 1091,
    "apex": 1092,
    "aplomb": 1093,
    "apogee": 1094,
    "arch": 1095,
    "arrant": 1096,
    "artifice": 1097,
    "ascendancy": 1098,
    "beatific": 1099,
    "bilious": 1100,
    "boon": 1101,
    "boorish": 1102,
    "bowdlerize": 1103,
    "bridle": 1104,
    "cataclysm": 1105,
    "champion": 1106,
    "chauvinism": 1107,
    "chimera": 1108,
    "cohesive": 1109,
    "conciliate": 1110,
    "conniving": 1111,
    "convivial": 1112,
    "crestfallen": 1113,
    "debase": 1114,
    "deliberate": 1115,
    "demure": 1116,
    "denote": 1117,
    "denouement": 1118,
    "derelict": 1119,
    "desiccated": 1120,
    "destitute": 1121,
    "devolve": 1122,
    "diabolical": 1123,
    "dilapidated": 1124,
    "discriminate": 1125,
    "discursive": 1126,
    "disenfranchise": 1127,
    "docile": 1128,
    "dovetail": 1129,
    "duplicity": 1130,
    "edifying": 1131,
    "embroiled": 1132,
    "embryonic": 1133,
    "enmity": 1134,
    "evasive": 1135,
    "exasperate": 1136,
    "exemplar": 1137,
    "extenuating": 1138,
    "fledgling": 1139,
    "flush": 1140,
    "foolhardy": 1141,
    "glut": 1142,
    "graft": 1143,
    "gumption": 1144,
    "hamper": 1145,
    "haphazard": 1146,
    "haughty": 1147,
    "hector": 1148,
    "hedge": 1149,
    "hoodwink": 1150,
    "impartial": 1151,
    "impeccable": 1152,
    "incontrovertible": 1153,
    "ingenuity": 1154,
    "juggernaut": 1155,
    "kowtow": 1156,
    "lascivious": 1157,
    "leery": 1158,
    "maladroit": 1159,
    "maunder": 1160,
    "mettlesome": 1161,
    "miser": 1162,
    "nettlesome": 1163,
    "palimpsest": 1164,
    "peevish": 1165,
    "perpetuate": 1166,
    "perquisite": 1167,
    "pine": 1168,
    "pinnacle": 1169,
    "plodding": 1170,
    "portentous": 1171,
    "preclude": 1172,
    "prescience": 1173,
    "presumption": 1174,
    "prevail": 1175,
    "primacy": 1176,
    "promulgate": 1177,
    "proselytize": 1178,
    "protean": 1179,
    "provident": 1180,
    "qualify": 1181,
    "raffish": 1182,
    "rash": 1183,
    "remonstrate": 1184,
    "resolve": 1185,
    "resurgent": 1186,
    "retiring": 1187,
    "row": 1188,
    "sartorial": 1189,
    "saturnine": 1190,
    "schadenfreude": 1191,
    "semblance": 1192,
    "serendipity": 1193,
    "simulacrum": 1194,
    "steadfast": 1195,
    "subsume": 1196,
    "sullen": 1197,
    "tarnish": 1198,
    "tenacious": 1199,
    "tender": 1200,
    "treacherous": 1201,
    "unpropitious": 1202,
    "unruly": 1203,
    "vanquish": 1204,
    "vaunted": 1205,
    "vehement": 1206,
    "vicarious": 1207,
    "vindictive": 1208,
    "virago": 1209,
    "wanting": 1210
  }

for(let key in obj){
    const dirname = './' + key;
    fs.mkdir(dirname,function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("DONE ✅");
        }
    })
}


// let wordList = ["abase", "pokemon", "regale", "adapt", "bittu"];

// for(let key in obj){
//     let url = "http://www.pixnary.com/greImages/" + key + ".jpg";
//     request(url,(error,response,html) => {
//         if(error && response.statusCode!==200){
//             // console.log("ERROR");
//             // console.log(error)
//         }
//         const $ = cheerio.load(html);
//         if($('div').html() == null){
//             console.log(url);
//             urlList.push(url);
//         }
//         else{
//             console.log("not there")
//         }
//     })
// }

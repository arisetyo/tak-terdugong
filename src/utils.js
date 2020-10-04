/**
 * Created by Arie M. Prasetyo on 2019-05-05
 */
import * as d3 from 'd3';

 /**
 * Function to compute density
 * based on https://www.d3-graph-gallery.com/graph/density_basic.html
 * 
 * In statistics, kernel density estimation (KDE) is a non-parametric way to estimate the probability density function of a random variable.
 * Kernel density estimation is a fundamental data smoothing problem where inferences about the population are made, based on a finite data sample.
 * In some fields such as signal processing and econometrics it is also termed the Parzen–Rosenblatt window method, 
 * after Emanuel Parzen and Murray Rosenblatt, who are usually credited with independently creating it in its current form.
 * (from https://en.wikipedia.org/wiki/Kernel_density_estimation)
 *
 * @params X     bandwidth used for computation
 * */
const KernelDensityEstimator = (kernel, X) => (
  V => (
    X.map(x => (
      [x, d3.mean(V, v => (kernel(x - v)))]
    ))
  )
);

/**
 * Epanechnikov (parabolic)
 * K(u) = 3/4 (1 - u^2)
 * 
 * Several types of kernel functions are commonly used:
 * uniform, triangle, Epanechnikov, quartic (biweight), tricube, triweight, Gaussian, quadratic and cosine.
 * */
const EpanechnikovKernel = k => (
  v => (
    Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0
  )
);

// TODO
/**
 * draw the scales
 */

/**
 * draw legend
 */

/**
 * draw tooltip
 */

/**
 * draw popup info
 */
const moviesData = [
  {
    "title": "Face/Off",
    "date": "27 Jun 1997",
    "boxOffice": null,
    "score": 82,
    "year": 1997
  }, {
    "title": "Tomorrow Never Dies",
    "date": "19 Dec 1997",
    "boxOffice": null,
    "score": 52,
    "year": 1997
  }, {
    "title": "My Best Friend's Wedding",
    "date": "20 Jun 1997",
    "boxOffice": null,
    "score": 50,
    "year": 1997
  }, {
    "title": "Good Will Hunting",
    "date": "09 Jan 1998",
    "boxOffice": null,
    "score": 70,
    "year": 1997
  }, {
    "title": "As Good as It Gets",
    "date": "25 Dec 1997",
    "boxOffice": null,
    "score": 67,
    "year": 1997
  }, {
    "title": "Air Force One",
    "date": "25 Jul 1997",
    "boxOffice": null,
    "score": 61,
    "year": 1997
  }, {
    "title": "Liar Liar",
    "date": "21 Mar 1997",
    "boxOffice": null,
    "score": 70,
    "year": 1997
  }, {
    "title": "The Lost World: Jurassic Park",
    "date": "23 May 1997",
    "boxOffice": null,
    "score": 59,
    "year": 1997
  }, {
    "title": "Men in Black",
    "date": "02 Jul 1997",
    "boxOffice": null,
    "score": 71,
    "year": 1997
  }, {
    "title": "Titanic",
    "date": "19 Dec 1997",
    "boxOffice": null,
    "score": 75,
    "year": 1997
  }, {
    "title": "Patch Adams",
    "date": "25 Dec 1998",
    "boxOffice": null,
    "score": 25,
    "year": 1998
  }, {
    "title": "Godzilla",
    "date": "20 May 1998",
    "boxOffice": null,
    "score": 32,
    "year": 1998
  }, {
    "title": "Deep Impact",
    "date": "08 May 1998",
    "boxOffice": null,
    "score": 40,
    "year": 1998
  }, {
    "title": "Rush Hour",
    "date": "18 Sep 1998",
    "boxOffice": null,
    "score": 60,
    "year": 1998
  }, {
    "title": "Doctor Dolittle",
    "date": "26 Jun 1998",
    "boxOffice": null,
    "score": 46,
    "year": 1998
  }, {
    "title": "The Waterboy",
    "date": "06 Nov 1998",
    "boxOffice": null,
    "score": 41,
    "year": 1998
  }, {
    "title": "A Bug's Life",
    "date": "25 Nov 1998",
    "boxOffice": null,
    "score": 77,
    "year": 1998
  }, {
    "title": "There's Something About Mary",
    "date": "15 Jul 1998",
    "boxOffice": null,
    "score": 69,
    "year": 1998
  }, {
    "title": "Armageddon",
    "date": "01 Jul 1998",
    "boxOffice": null,
    "score": 42,
    "year": 1998
  }, {
    "title": "Saving Private Ryan",
    "date": "24 Jul 1998",
    "boxOffice": null,
    "score": 90,
    "year": 1998
  }, {
    "title": "The Blair Witch Project",
    "date": "30 Jul 1999",
    "boxOffice": null,
    "score": 81,
    "year": 1999
  }, {
    "title": "Runaway Bride",
    "date": "30 Jul 1999",
    "boxOffice": null,
    "score": 39,
    "year": 1999
  }, {
    "title": "The Mummy",
    "date": "07 May 1999",
    "boxOffice": null,
    "score": 48,
    "year": 1999
  }, {
    "title": "Big Daddy",
    "date": "25 Jun 1999",
    "boxOffice": null,
    "score": 41,
    "year": 1999
  }, {
    "title": "Tarzan",
    "date": "18 Jun 1999",
    "boxOffice": null,
    "score": 79,
    "year": 1999
  }, {
    "title": "The Matrix",
    "date": "31 Mar 1999",
    "boxOffice": null,
    "score": 73,
    "year": 1999
  }, {
    "title": "Austin Powers: The Spy Who Shagged Me",
    "date": "11 Jun 1999",
    "boxOffice": null,
    "score": 59,
    "year": 1999
  }, {
    "title": "Toy Story 2",
    "date": "24 Nov 1999",
    "boxOffice": null,
    "score": 88,
    "year": 1999
  }, {
    "title": "The Sixth Sense",
    "date": "06 Aug 1999",
    "boxOffice": null,
    "score": 64,
    "year": 1999
  }, {
    "title": "Star Wars: Episode I - The Phantom Menace",
    "date": "19 May 1999",
    "boxOffice": 634133973.59,
    "score": 51,
    "year": 1999
  }, {
    "title": "What Lies Beneath",
    "date": "21 Jul 2000",
    "boxOffice": 220662882.97,
    "score": 51,
    "year": 2000
  }, {
    "title": "Scary Movie",
    "date": "07 Jul 2000",
    "boxOffice": null,
    "score": 48,
    "year": 2000
  }, {
    "title": "X-Men",
    "date": "14 Jul 2000",
    "boxOffice": 222294557.98,
    "score": 64,
    "year": 2000
  }, {
    "title": "Meet the Parents",
    "date": "06 Oct 2000",
    "boxOffice": 234095058.97,
    "score": 73,
    "year": 2000
  }, {
    "title": "The Perfect Storm",
    "date": "30 Jun 2000",
    "boxOffice": null,
    "score": 59,
    "year": 2000
  }, {
    "title": "What Women Want",
    "date": "15 Dec 2000",
    "boxOffice": 258335244.81,
    "score": 47,
    "year": 2000
  }, {
    "title": "Gladiator",
    "date": "05 May 2000",
    "boxOffice": null,
    "score": 67,
    "year": 2000
  }, {
    "title": "Mission: Impossible II",
    "date": "24 May 2000",
    "boxOffice": null,
    "score": 59,
    "year": 2000
  }, {
    "title": "Cast Away",
    "date": "22 Dec 2000",
    "boxOffice": null,
    "score": 73,
    "year": 2000
  }, {
    "title": "How the Grinch Stole Christmas",
    "date": "17 Nov 2000",
    "boxOffice": 368692934.91,
    "score": 46,
    "year": 2000
  }, {
    "title": "Planet of the Apes",
    "date": "27 Jul 2001",
    "boxOffice": 246496579.25,
    "score": 50,
    "year": 2001
  }, {
    "title": "Jurassic Park III",
    "date": "18 Jul 2001",
    "boxOffice": null,
    "score": 42,
    "year": 2001
  }, {
    "title": "Ocean's Eleven",
    "date": "07 Dec 2001",
    "boxOffice": 253769273.04,
    "score": 74,
    "year": 2001
  }, {
    "title": "Pearl Harbor",
    "date": "25 May 2001",
    "boxOffice": 273717158.02,
    "score": 44,
    "year": 2001
  }, {
    "title": "The Mummy Returns",
    "date": "04 May 2001",
    "boxOffice": 277771921.71,
    "score": 48,
    "year": 2001
  }, {
    "title": "Rush Hour 2",
    "date": "03 Aug 2001",
    "boxOffice": null,
    "score": 48,
    "year": 2001
  }, {
    "title": "Shrek",
    "date": "18 May 2001",
    "boxOffice": 369524512.08,
    "score": 84,
    "year": 2001
  }, {
    "title": "Monsters, Inc.",
    "date": "02 Nov 2001",
    "boxOffice": 47105902.09,
    "score": 78,
    "year": 2001
  }, {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "date": "19 Dec 2001",
    "boxOffice": 434600112.93,
    "score": 92,
    "year": 2001
  }, {
    "title": "Harry Potter and the Sorcerer's Stone",
    "date": "16 Nov 2001",
    "boxOffice": 439524507.29,
    "score": 64,
    "year": 2001
  }, {
    "title": "Chicago",
    "date": "24 Jan 2003",
    "boxOffice": null,
    "score": 82,
    "year": 2002
  }, {
    "title": "Ice Age",
    "date": "15 Mar 2002",
    "boxOffice": 240351128.4,
    "score": 60,
    "year": 2002
  }, {
    "title": "Men in Black II",
    "date": "03 Jul 2002",
    "boxOffice": 259426614.79,
    "score": 49,
    "year": 2002
  }, {
    "title": "Austin Powers in Goldmember",
    "date": "26 Jul 2002",
    "boxOffice": 290327762.28,
    "score": 62,
    "year": 2002
  }, {
    "title": "Signs",
    "date": "02 Aug 2002",
    "boxOffice": 310570067.55,
    "score": 59,
    "year": 2002
  }, {
    "title": "My Big Fat Greek Wedding",
    "date": "02 Aug 2002",
    "boxOffice": 328712417.93,
    "score": 62,
    "year": 2002
  }, {
    "title": "Harry Potter and the Chamber of Secrets",
    "date": "15 Nov 2002",
    "boxOffice": 356760499.43,
    "score": 63,
    "year": 2002
  }, {
    "title": "Star Wars: Episode II - Attack of the Clones",
    "date": "16 May 2002",
    "boxOffice": 419524446.91,
    "score": 54,
    "year": 2002
  }, {
    "title": "The Lord of the Rings: The Two Towers",
    "date": "18 Dec 2002",
    "boxOffice": 462853051.7,
    "score": 87,
    "year": 2002
  }, {
    "title": "Spider-Man",
    "date": "03 May 2002",
    "boxOffice": 550063961.31,
    "score": 73,
    "year": 2002
  }, {
    "title": "Cheaper by the Dozen",
    "date": "25 Dec 2003",
    "boxOffice": 184516256.77,
    "score": 46,
    "year": 2003
  }, {
    "title": "Matrix Revolutions",
    "date": "05 Nov 2003",
    "boxOffice": 185273461.76,
    "score": 47,
    "year": 2003
  }, {
    "title": "Terminator 3: Rise of the Machines",
    "date": "02 Jul 2003",
    "boxOffice": 200162797.91,
    "score": 66,
    "year": 2003
  }, {
    "title": "Elf",
    "date": "07 Nov 2003",
    "boxOffice": 230998956.52,
    "score": 64,
    "year": 2003
  }, {
    "title": "X-Men 2",
    "date": "02 May 2003",
    "boxOffice": 286168481.27,
    "score": 68,
    "year": 2003
  }, {
    "title": "Bruce Almighty",
    "date": "23 May 2003",
    "boxOffice": 323171510.05,
    "score": 46,
    "year": 2003
  }, {
    "title": "The Matrix Reloaded",
    "date": "15 May 2003",
    "boxOffice": 375006956.52,
    "score": 62,
    "year": 2003
  }, {
    "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "date": "09 Jul 2003",
    "boxOffice": 406770314.84,
    "score": 63,
    "year": 2003
  }, {
    "title": "The Lord of the Rings: The Return of the King",
    "date": "17 Dec 2003",
    "boxOffice": 484911304.35,
    "score": 94,
    "year": 2003
  }, {
    "title": "Finding Nemo",
    "date": "30 May 2003",
    "boxOffice": 506931299.86,
    "score": 90,
    "year": 2003
  }, {
    "title": "Shark Tale",
    "date": "01 Oct 2004",
    "boxOffice": 208607659.25,
    "score": 48,
    "year": 2004
  }, {
    "title": "National Treasure",
    "date": "19 Nov 2004",
    "boxOffice": 224456311.33,
    "score": 39,
    "year": 2004
  }, {
    "title": "The Bourne Supremacy",
    "date": "23 Jul 2004",
    "boxOffice": 228444482.51,
    "score": 73,
    "year": 2004
  }, {
    "title": "The Polar Express",
    "date": "10 Nov 2004",
    "boxOffice": 211252175.75,
    "score": 61,
    "year": 2004
  }, {
    "title": "The Day After Tomorrow",
    "date": "28 May 2004",
    "boxOffice": 242114131.98,
    "score": 47,
    "year": 2004
  }, {
    "title": "Harry Potter and the Prisoner of Azkaban",
    "date": "04 Jun 2004",
    "boxOffice": 323572319.55,
    "score": 82,
    "year": 2004
  }, {
    "title": "The Incredibles",
    "date": "05 Nov 2004",
    "boxOffice": null,
    "score": 90,
    "year": 2004
  }, {
    "title": "Meet the Fockers",
    "date": "22 Dec 2004",
    "boxOffice": 362252810.93,
    "score": 41,
    "year": 2004
  }, {
    "title": "Spider-Man 2",
    "date": "30 Jun 2004",
    "boxOffice": 484501795.3,
    "score": 83,
    "year": 2004
  }, {
    "title": "Shrek 2",
    "date": "19 May 2004",
    "boxOffice": 566372579.91,
    "score": 75,
    "year": 2004
  }, {
    "title": "Mr. & Mrs. Smith",
    "date": "10 Jun 2005",
    "boxOffice": 233698637.99,
    "score": 55,
    "year": 2005
  }, {
    "title": "Madagascar",
    "date": "27 May 2005",
    "boxOffice": 242404877.43,
    "score": 57,
    "year": 2005
  }, {
    "title": "Charlie and the Chocolate Factory",
    "date": "15 Jul 2005",
    "boxOffice": 258675023.04,
    "score": 72,
    "year": 2005
  }, {
    "title": "Batman Begins",
    "date": "15 Jun 2005",
    "boxOffice": 256164833.59,
    "score": 70,
    "year": 2005
  }, {
    "title": "Wedding Crashers",
    "date": "15 Jul 2005",
    "boxOffice": 262588870.27,
    "score": 64,
    "year": 2005
  }, {
    "title": "King Kong",
    "date": "14 Dec 2005",
    "boxOffice": 273736159.75,
    "score": 81,
    "year": 2005
  }, {
    "title": "War of the Worlds",
    "date": "29 Jun 2005",
    "boxOffice": 293870228.7,
    "score": 73,
    "year": 2005
  }, {
    "title": "Harry Potter and the Goblet of Fire",
    "date": "18 Nov 2005",
    "boxOffice": 363970438.26,
    "score": 81,
    "year": 2005
  }, {
    "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    "date": "09 Dec 2005",
    "boxOffice": 366092580.04,
    "score": 75,
    "year": 2005
  }, {
    "title": "Star Wars: Episode III - Revenge of the Sith",
    "date": "19 May 2005",
    "boxOffice": null,
    "score": 68,
    "year": 2005
  }, {
    "title": "Casino Royale",
    "date": "17 Nov 2006",
    "boxOffice": 203059528.48,
    "score": 80,
    "year": 2006
  }, {
    "title": "Ice Age: The Meltdown",
    "date": "31 Mar 2006",
    "boxOffice": 237460000,
    "score": 58,
    "year": 2006
  }, {
    "title": "Happy Feet",
    "date": "17 Nov 2006",
    "boxOffice": 240499682.54,
    "score": 77,
    "year": 2006
  }, {
    "title": "Superman Returns",
    "date": "28 Jun 2006",
    "boxOffice": 243296190.48,
    "score": 72,
    "year": 2006
  }, {
    "title": "300",
    "date": "09 Mar 2007",
    "boxOffice": 255941269.84,
    "score": 52,
    "year": 2006
  }, {
    "title": "The Da Vinci Code",
    "date": "19 May 2006",
    "boxOffice": 264496320.17,
    "score": 46,
    "year": 2006
  }, {
    "title": "X-Men: The Last Stand",
    "date": "26 May 2006",
    "boxOffice": 284879047.62,
    "score": 58,
    "year": 2006
  }, {
    "title": "Cars",
    "date": "09 Jun 2006",
    "boxOffice": 296737178.71,
    "score": 73,
    "year": 2006
  }, {
    "title": "Night at the Museum",
    "date": "22 Dec 2006",
    "boxOffice": 303117142.86,
    "score": 48,
    "year": 2006
  }, {
    "title": "Pirates of the Caribbean: Dead Man's Chest",
    "date": "07 Jul 2006",
    "boxOffice": 514353957.22,
    "score": 53,
    "year": 2006
  }, {
    "title": "Ratatouille",
    "date": "29 Jun 2007",
    "boxOffice": 132889670.23,
    "score": 96,
    "year": 2007
  }, {
    "title": "Alvin and the Chipmunks",
    "date": "14 Dec 2007",
    "boxOffice": 256741763.14,
    "score": 39,
    "year": 2007
  }, {
    "title": "National Treasure: Book of Secrets",
    "date": "21 Dec 2007",
    "boxOffice": 260004529.03,
    "score": 48,
    "year": 2007
  }, {
    "title": "The Bourne Ultimatum",
    "date": "03 Aug 2007",
    "boxOffice": 268832595.42,
    "score": 85,
    "year": 2007
  }, {
    "title": "I Am Legend",
    "date": "14 Dec 2007",
    "boxOffice": 303116434.47,
    "score": 65,
    "year": 2007
  }, {
    "title": "Harry Potter and the Order of the Phoenix",
    "date": "11 Jul 2007",
    "boxOffice": 345179288.68,
    "score": 71,
    "year": 2007
  }, {
    "title": "Pirates of the Caribbean: At World's End",
    "date": "25 May 2007",
    "boxOffice": 365778017.66,
    "score": 50,
    "year": 2007
  }, {
    "title": "Transformers",
    "date": "03 Jul 2007",
    "boxOffice": 377139383.22,
    "score": 61,
    "year": 2007
  }, {
    "title": "Shrek the Third",
    "date": "18 May 2007",
    "boxOffice": 379139864.21,
    "score": 58,
    "year": 2007
  }, {
    "title": "Spider-Man 3",
    "date": "04 May 2007",
    "boxOffice": 397846591,
    "score": 59,
    "year": 2007
  }, {
    "title": "Horton Hears a Who!",
    "date": "14 Mar 2008",
    "boxOffice": 175768972.33,
    "score": 71,
    "year": 2008
  }, {
    "title": "Quantum of Solace",
    "date": "14 Nov 2008",
    "boxOffice": 191721471.6,
    "score": 58,
    "year": 2008
  }, {
    "title": "Madagascar: Escape 2 Africa",
    "date": "07 Nov 2008",
    "boxOffice": 204908548.03,
    "score": 61,
    "year": 2008
  }, {
    "title": "Twilight",
    "date": "21 Nov 2008",
    "boxOffice": 217963034.94,
    "score": 56,
    "year": 2008
  }, {
    "title": "Kung Fu Panda",
    "date": "06 Jun 2008",
    "boxOffice": 245224764.85,
    "score": 73,
    "year": 2008
  }, {
    "title": "WALL·E",
    "date": "27 Jun 2008",
    "boxOffice": 254736667.04,
    "score": 95,
    "year": 2008
  }, {
    "title": "Hancock",
    "date": "02 Jul 2008",
    "boxOffice": 259514222.67,
    "score": 49,
    "year": 2008
  }, {
    "title": "Indiana Jones and the Kingdom of the Crystal Skull",
    "date": "22 May 2008",
    "boxOffice": 360852053.82,
    "score": 65,
    "year": 2008
  }, {
    "title": "Iron Man",
    "date": "02 May 2008",
    "boxOffice": 362378833,
    "score": 79,
    "year": 2008
  }, {
    "title": "The Dark Knight",
    "date": "18 Jul 2008",
    "boxOffice": 607174228.28,
    "score": 82,
    "year": 2008
  }, {
    "title": "Sherlock Holmes",
    "date": "25 Dec 2009",
    "boxOffice": 238463672.98,
    "score": 57,
    "year": 2009
  }, {
    "title": "Alvin and the Chipmunks: The Squeakquel",
    "date": "23 Dec 2009",
    "boxOffice": 250566799.32,
    "score": 41,
    "year": 2009
  }, {
    "title": "The Blind Side",
    "date": "20 Nov 2009",
    "boxOffice": 292379440.38,
    "score": 53,
    "year": 2009
  }, {
    "title": "Star Trek",
    "date": "08 May 2009",
    "boxOffice": 294440720,
    "score": 82,
    "year": 2009
  }, {
    "title": "The Hangover",
    "date": "05 Jun 2009",
    "boxOffice": 316845362.34,
    "score": 73,
    "year": 2009
  }, {
    "title": "Up",
    "date": "29 May 2009",
    "boxOffice": 334744816.82,
    "score": 88,
    "year": 2009
  }, {
    "title": "The Twilight Saga: New Moon",
    "date": "20 Nov 2009",
    "boxOffice": 338873449.89,
    "score": 44,
    "year": 2009
  }, {
    "title": "Harry Potter and the Half-Blood Prince",
    "date": "15 Jul 2009",
    "boxOffice": 344960219.7,
    "score": 78,
    "year": 2009
  }, {
    "title": "Transformers: Revenge of the Fallen",
    "date": "24 Jun 2009",
    "boxOffice": 459394127.86,
    "score": 35,
    "year": 2009
  }, {
    "title": "Avatar",
    "date": "18 Dec 2009",
    "boxOffice": 856572358.15,
    "score": 83,
    "year": 2009
  }, {
    "title": "Tangled",
    "date": "24 Nov 2010",
    "boxOffice": 225725992.87,
    "score": 71,
    "year": 2010
  }, {
    "title": "How to Train Your Dragon",
    "date": "26 Mar 2010",
    "boxOffice": 243820523.17,
    "score": 74,
    "year": 2010
  }, {
    "title": "Shrek Forever After",
    "date": "21 May 2010",
    "boxOffice": 267897988.68,
    "score": 58,
    "year": 2010
  }, {
    "title": "Despicable Me",
    "date": "09 Jul 2010",
    "boxOffice": 282689027.42,
    "score": 72,
    "year": 2010
  }, {
    "title": "Inception",
    "date": "16 Jul 2010",
    "boxOffice": 328881006.52,
    "score": 74,
    "year": 2010
  }, {
    "title": "Harry Potter and the Deathly Hallows: Part 1",
    "date": "19 Nov 2010",
    "boxOffice": 331591902.92,
    "score": 65,
    "year": 2010
  }, {
    "title": "The Twilight Saga: Eclipse",
    "date": "30 Jun 2010",
    "boxOffice": 337822511,
    "score": 58,
    "year": 2010
  }, {
    "title": "Iron Man 2",
    "date": "07 May 2010",
    "boxOffice": 350788412.05,
    "score": 57,
    "year": 2010
  }, {
    "title": "Alice in Wonderland",
    "date": "05 Mar 2010",
    "boxOffice": 358955744.21,
    "score": 53,
    "year": 2010
  }, {
    "title": "Toy Story 3",
    "date": "18 Jun 2010",
    "boxOffice": 466490258.95,
    "score": 92,
    "year": 2010
  }, {
    "title": "Thor",
    "date": "06 May 2011",
    "boxOffice": 197255395.29,
    "score": 57,
    "year": 2011
  }, {
    "title": "Sherlock Holmes: A Game of Shadows",
    "date": "16 Dec 2011",
    "boxOffice": 203592678.84,
    "score": 48,
    "year": 2011
  }, {
    "title": "Cars 2",
    "date": "24 Jun 2011",
    "boxOffice": 208627398.89,
    "score": 57,
    "year": 2011
  }, {
    "title": "Mission: Impossible - Ghost Protocol",
    "date": "21 Dec 2011",
    "boxOffice": 228148651.13,
    "score": 73,
    "year": 2011
  }, {
    "title": "Fast Five",
    "date": "29 Apr 2011",
    "boxOffice": 228628218.43,
    "score": 66,
    "year": 2011
  }, {
    "title": "Pirates of the Caribbean: On Stranger Tides",
    "date": "20 May 2011",
    "boxOffice": 262691561,
    "score": 45,
    "year": 2011
  }, {
    "title": "The Hangover Part II",
    "date": "26 May 2011",
    "boxOffice": 277224171.89,
    "score": 44,
    "year": 2011
  }, {
    "title": "The Twilight Saga: Breaking Dawn - Part 1",
    "date": "18 Nov 2011",
    "boxOffice": 306502338.65,
    "score": 45,
    "year": 2011
  }, {
    "title": "Transformers: Dark of the Moon",
    "date": "29 Jun 2011",
    "boxOffice": 383971583,
    "score": 42,
    "year": 2011
  }, {
    "title": "Harry Potter and the Deathly Hallows: Part 2",
    "date": "15 Jul 2011",
    "boxOffice": 415182628.83,
    "score": 87,
    "year": 2011
  }, {
    "title": "Madagascar 3: Europe's Most Wanted",
    "date": "08 Jun 2012",
    "boxOffice": 230998256.02,
    "score": 60,
    "year": 2012
  }, {
    "title": "Ted",
    "date": "29 Jun 2012",
    "boxOffice": 232848732.98,
    "score": 62,
    "year": 2012
  }, {
    "title": "Brave",
    "date": "22 Jun 2012",
    "boxOffice": 253328085.45,
    "score": 69,
    "year": 2012
  }, {
    "title": "The Amazing Spider-Man",
    "date": "03 Jul 2012",
    "boxOffice": 279750150.76,
    "score": 66,
    "year": 2012
  }, {
    "title": "The Twilight Saga: Breaking Dawn - Part 2",
    "date": "16 Nov 2012",
    "boxOffice": 312065263.05,
    "score": 52,
    "year": 2012
  }, {
    "title": "The Hobbit: An Unexpected Journey",
    "date": "14 Dec 2012",
    "boxOffice": 323491298.78,
    "score": 58,
    "year": 2012
  }, {
    "title": "Skyfall",
    "date": "09 Nov 2012",
    "boxOffice": 319539778.91,
    "score": 81,
    "year": 2012
  }, {
    "title": "The Hunger Games",
    "date": "23 Mar 2012",
    "boxOffice": 435570888.34,
    "score": 68,
    "year": 2012
  }, {
    "title": "The Dark Knight Rises",
    "date": "20 Jul 2012",
    "boxOffice": 478434902.34,
    "score": 78,
    "year": 2012
  }, {
    "title": "The Avengers",
    "date": "04 May 2012",
    "boxOffice": 665428027.56,
    "score": 69,
    "year": 2012
  }, {
    "title": "Oz the Great and Powerful",
    "date": "08 Mar 2013",
    "boxOffice": 247167683.26,
    "score": 44,
    "year": 2013
  }, {
    "title": "Fast & Furious 6",
    "date": "24 May 2013",
    "boxOffice": 251162849.8,
    "score": 61,
    "year": 2013
  }, {
    "title": "The Hobbit: The Desolation of Smaug",
    "date": "13 Dec 2013",
    "boxOffice": 189864996.93,
    "score": 66,
    "year": 2013
  }, {
    "title": "Monsters University",
    "date": "21 Jun 2013",
    "boxOffice": 273890615.01,
    "score": 65,
    "year": 2013
  }, {
    "title": "Gravity",
    "date": "04 Oct 2013",
    "boxOffice": 288395296.94,
    "score": 96,
    "year": 2013
  }, {
    "title": "Man of Steel",
    "date": "14 Jun 2013",
    "boxOffice": 306216194.46,
    "score": 55,
    "year": 2013
  }, {
    "title": "Despicable Me 2",
    "date": "03 Jul 2013",
    "boxOffice": 387266004.16,
    "score": 62,
    "year": 2013
  }, {
    "title": "Frozen",
    "date": "27 Nov 2013",
    "boxOffice": 421659599.81,
    "score": 74,
    "year": 2013
  }, {
    "title": "Iron Man 3",
    "date": "03 May 2013",
    "boxOffice": 430346311.61,
    "score": 62,
    "year": 2013
  }, {
    "title": "The Hunger Games: Catching Fire",
    "date": "22 Nov 2013",
    "boxOffice": 354240997.72,
    "score": 76,
    "year": 2013
  }, {
    "title": "Big Hero 6",
    "date": "07 Nov 2014",
    "boxOffice": null,
    "score": 74,
    "year": 2014
  }, {
    "title": "X-Men: Days of Future Past",
    "date": "23 May 2014",
    "boxOffice": 206363698.83,
    "score": 75,
    "year": 2014
  }, {
    "title": "Maleficent",
    "date": "30 May 2014",
    "boxOffice": 197630846.36,
    "score": 56,
    "year": 2014
  }, {
    "title": "Transformers: Age of Extinction",
    "date": "27 Jun 2014",
    "boxOffice": 214077780.63,
    "score": 32,
    "year": 2014
  }, {
    "title": "The Hobbit: The Battle of the Five Armies",
    "date": "17 Dec 2014",
    "boxOffice": 194396829.15,
    "score": 59,
    "year": 2014
  }, {
    "title": "The Lego Movie",
    "date": "07 Feb 2014",
    "boxOffice": 253542274.58,
    "score": 83,
    "year": 2014
  }, {
    "title": "Captain America: The Winter Soldier",
    "date": "04 Apr 2014",
    "boxOffice": 236733224.63,
    "score": 70,
    "year": 2014
  }, {
    "title": "Guardians of the Galaxy",
    "date": "01 Aug 2014",
    "boxOffice": 280175531.31,
    "score": 76,
    "year": 2014
  }, {
    "title": "The Hunger Games: Mockingjay - Part 1",
    "date": "21 Nov 2014",
    "boxOffice": 305920822.37,
    "score": 64,
    "year": 2014
  }, {
    "title": "American Sniper",
    "date": "16 Jan 2015",
    "boxOffice": 284094332.64,
    "score": 72,
    "year": 2014
  }, {
    "title": "Spectre",
    "date": "06 Nov 2015",
    "boxOffice": 215915303.22,
    "score": 60,
    "year": 2015
  }, {
    "title": "Cinderella",
    "date": "13 Mar 2015",
    "boxOffice": 189594626.28,
    "score": 67,
    "year": 2015
  }, {
    "title": "The Martian",
    "date": "02 Oct 2015",
    "boxOffice": 209230353.99,
    "score": 80,
    "year": 2015
  }, {
    "title": "The Hunger Games: Mockingjay - Part 2",
    "date": "20 Nov 2015",
    "boxOffice": 263346859.36,
    "score": 65,
    "year": 2015
  }, {
    "title": "Minions",
    "date": "10 Jul 2015",
    "boxOffice": 287473045.4,
    "score": 56,
    "year": 2015
  }, {
    "title": "Furious 7",
    "date": "03 Apr 2015",
    "boxOffice": 327823431.33,
    "score": 67,
    "year": 2015
  }, {
    "title": "Inside Out",
    "date": "19 Jun 2015",
    "boxOffice": 273354250.47,
    "score": 94,
    "year": 2015
  }, {
    "title": "Avengers: Age of Ultron",
    "date": "01 May 2015",
    "boxOffice": 443784020.78,
    "score": 66,
    "year": 2015
  }, {
    "title": "Jurassic World",
    "date": "12 Jun 2015",
    "boxOffice": 546834612.85,
    "score": 59,
    "year": 2015
  }, {
    "title": "Star Wars: The Force Awakens",
    "date": "18 Dec 2015",
    "boxOffice": 968680583.4,
    "score": 81,
    "year": 2015
  }, {
    "title": "Sing",
    "date": "21 Dec 2016",
    "boxOffice": null,
    "score": 59,
    "year": 2016
  }, {
    "title": "Suicide Squad",
    "date": "05 Aug 2016",
    "boxOffice": 331945895.2,
    "score": 40,
    "year": 2016
  }, {
    "title": "Batman v Superman: Dawn of Justice",
    "date": "25 Mar 2016",
    "boxOffice": 300051767.12,
    "score": 44,
    "year": 2016
  }, {
    "title": "Zootopia",
    "date": "04 Mar 2016",
    "boxOffice": 348534145.34,
    "score": 78,
    "year": 2016
  }, {
    "title": "Deadpool",
    "date": "12 Feb 2016",
    "boxOffice": 335676420.87,
    "score": 65,
    "year": 2016
  }, {
    "title": "The Jungle Book",
    "date": "15 Apr 2016",
    "boxOffice": 371750340.94,
    "score": 77,
    "year": 2016
  }, {
    "title": "The Secret Life of Pets",
    "date": "08 Jul 2016",
    "boxOffice": 376152182.71,
    "score": 61,
    "year": 2016
  }, {
    "title": "Captain America: Civil War",
    "date": "06 May 2016",
    "boxOffice": 416774116.57,
    "score": 75,
    "year": 2016
  }, {
    "title": "Finding Dory",
    "date": "17 Jun 2016",
    "boxOffice": 496652748.62,
    "score": 77,
    "year": 2016
  }, {
    "title": "Rogue One: A Star Wars Story",
    "date": "16 Dec 2016",
    "boxOffice": 543508839.84,
    "score": 65,
    "year": 2016
  }, {
    "title": "Justice League",
    "date": "17 Nov 2017",
    "boxOffice": 227032490,
    "score": 45,
    "year": 2017
  }, {
    "title": "Despicable Me 3",
    "date": "30 Jun 2017",
    "boxOffice": 264194540,
    "score": 49,
    "year": 2017
  }, {
    "title": "Thor: Ragnarok",
    "date": "03 Nov 2017",
    "boxOffice": 314971245,
    "score": 74,
    "year": 2017
  }, {
    "title": "It",
    "date": "08 Sep 2017",
    "boxOffice": 326898358,
    "score": 69,
    "year": 2017
  }, {
    "title": "Spider-Man: Homecoming",
    "date": "07 Jul 2017",
    "boxOffice": 334166825,
    "score": 73,
    "year": 2017
  }, {
    "title": "Guardians of the Galaxy Vol. 2",
    "date": "05 May 2017",
    "boxOffice": 389804217,
    "score": 67,
    "year": 2017
  }, {
    "title": "Jumanji: Welcome to the Jungle",
    "date": "20 Dec 2017",
    "boxOffice": 393201353,
    "score": 58,
    "year": 2017
  }, {
    "title": "Wonder Woman",
    "date": "02 Jun 2017",
    "boxOffice": 412400625,
    "score": 76,
    "year": 2017
  }, {
    "title": "Beauty and the Beast",
    "date": "17 Mar 2017",
    "boxOffice": 503974884,
    "score": 65,
    "year": 2017
  }, {
    "title": "Star Wars: The Last Jedi",
    "date": "15 Dec 2017",
    "boxOffice": 619117636,
    "score": 85,
    "year": 2017
  }
];


const sxywuData = [
  {
    "date": "1/1/2017",
    "high": 54,
    "avg": 50,
    "low": 46
  },
  {
    "date": "1/2/2017",
    "high": 52,
    "avg": 48,
    "low": 44
  },
  {
    "date": "1/3/2017",
    "high": 59,
    "avg": 52,
    "low": 46
  },
  {
    "date": "1/4/2017",
    "high": 59,
    "avg": 52,
    "low": 46
  },
  {
    "date": "1/5/2017",
    "high": 51,
    "avg": 46,
    "low": 41
  },
  {
    "date": "1/6/2017",
    "high": 49,
    "avg": 44,
    "low": 38
  },
  {
    "date": "1/7/2017",
    "high": 62,
    "avg": 53,
    "low": 44
  },
  {
    "date": "1/8/2017",
    "high": 64,
    "avg": 59,
    "low": 54
  },
  {
    "date": "1/9/2017",
    "high": 59,
    "avg": 56,
    "low": 53
  },
  {
    "date": "1/10/2017",
    "high": 60,
    "avg": 58,
    "low": 56
  },
  {
    "date": "1/11/2017",
    "high": 58,
    "avg": 54,
    "low": 50
  },
  {
    "date": "1/12/2017",
    "high": 52,
    "avg": 49,
    "low": 45
  },
  {
    "date": "1/13/2017",
    "high": 57,
    "avg": 49,
    "low": 40
  },
  {
    "date": "1/14/2017",
    "high": 58,
    "avg": 49,
    "low": 40
  },
  {
    "date": "1/15/2017",
    "high": 52,
    "avg": 47,
    "low": 41
  },
  {
    "date": "1/16/2017",
    "high": 54,
    "avg": 49,
    "low": 44
  },
  {
    "date": "1/17/2017",
    "high": 52,
    "avg": 47,
    "low": 41
  },
  {
    "date": "1/18/2017",
    "high": 55,
    "avg": 52,
    "low": 49
  },
  {
    "date": "1/19/2017",
    "high": 58,
    "avg": 55,
    "low": 51
  },
  {
    "date": "1/20/2017",
    "high": 56,
    "avg": 34,
    "low": 11
  },
  {
    "date": "1/21/2017",
    "high": 56,
    "avg": 52,
    "low": 48
  },
  {
    "date": "1/22/2017",
    "high": 57,
    "avg": 52,
    "low": 47
  },
  {
    "date": "1/23/2017",
    "high": 54,
    "avg": 50,
    "low": 45
  },
  {
    "date": "1/24/2017",
    "high": 54,
    "avg": 48,
    "low": 41
  },
  {
    "date": "1/25/2017",
    "high": 56,
    "avg": 49,
    "low": 41
  },
  {
    "date": "1/26/2017",
    "high": 56,
    "avg": 50,
    "low": 43
  },
  {
    "date": "1/27/2017",
    "high": 58,
    "avg": 50,
    "low": 41
  },
  {
    "date": "1/28/2017",
    "high": 59,
    "avg": 50,
    "low": 41
  },
  {
    "date": "1/29/2017",
    "high": 60,
    "avg": 51,
    "low": 41
  },
  {
    "date": "1/30/2017",
    "high": 60,
    "avg": 51,
    "low": 42
  },
  {
    "date": "1/31/2017",
    "high": 59,
    "avg": 51,
    "low": 42
  },
  {
    "date": "2/1/2017",
    "high": 56,
    "avg": 52,
    "low": 47
  },
  {
    "date": "2/2/2017",
    "high": 62,
    "avg": 57,
    "low": 51
  },
  {
    "date": "2/3/2017",
    "high": 61,
    "avg": 58,
    "low": 55
  },
  {
    "date": "2/4/2017",
    "high": 61,
    "avg": 57,
    "low": 53
  },
  {
    "date": "2/5/2017",
    "high": 61,
    "avg": 56,
    "low": 50
  },
  {
    "date": "2/6/2017",
    "high": 60,
    "avg": 58,
    "low": 56
  },
  {
    "date": "2/7/2017",
    "high": 63,
    "avg": 60,
    "low": 56
  },
  {
    "date": "2/8/2017",
    "high": 64,
    "avg": 60,
    "low": 56
  },
  {
    "date": "2/9/2017",
    "high": 63,
    "avg": 61,
    "low": 58
  },
  {
    "date": "2/10/2017",
    "high": 62,
    "avg": 57,
    "low": 51
  },
  {
    "date": "2/11/2017",
    "high": 59,
    "avg": 53,
    "low": 47
  },
  {
    "date": "2/12/2017",
    "high": 64,
    "avg": 54,
    "low": 44
  },
  {
    "date": "2/13/2017",
    "high": 63,
    "avg": 55,
    "low": 46
  },
  {
    "date": "2/14/2017",
    "high": 66,
    "avg": 57,
    "low": 48
  },
  {
    "date": "2/15/2017",
    "high": 63,
    "avg": 57,
    "low": 51
  },
  {
    "date": "2/16/2017",
    "high": 64,
    "avg": 60,
    "low": 55
  },
  {
    "date": "2/17/2017",
    "high": 59,
    "avg": 57,
    "low": 54
  },
  {
    "date": "2/18/2017",
    "high": 57,
    "avg": 54,
    "low": 50
  },
  {
    "date": "2/19/2017",
    "high": 58,
    "avg": 54,
    "low": 50
  },
  {
    "date": "2/20/2017",
    "high": 60,
    "avg": 57,
    "low": 54
  },
  {
    "date": "2/21/2017",
    "high": 61,
    "avg": 56,
    "low": 50
  },
  {
    "date": "2/22/2017",
    "high": 55,
    "avg": 50,
    "low": 45
  },
  {
    "date": "2/23/2017",
    "high": 53,
    "avg": 48,
    "low": 42
  },
  {
    "date": "2/24/2017",
    "high": 54,
    "avg": 47,
    "low": 40
  },
  {
    "date": "2/25/2017",
    "high": 56,
    "avg": 50,
    "low": 44
  },
  {
    "date": "2/26/2017",
    "high": 57,
    "avg": 49,
    "low": 40
  },
  {
    "date": "2/27/2017",
    "high": 55,
    "avg": 49,
    "low": 42
  },
  {
    "date": "2/28/2017",
    "high": 57,
    "avg": 50,
    "low": 43
  },
  {
    "date": "3/1/2017",
    "high": 62,
    "avg": 53,
    "low": 43
  },
  {
    "date": "3/2/2017",
    "high": 66,
    "avg": 55,
    "low": 43
  },
  {
    "date": "3/3/2017",
    "high": 62,
    "avg": 53,
    "low": 44
  },
  {
    "date": "3/4/2017",
    "high": 61,
    "avg": 56,
    "low": 51
  },
  {
    "date": "3/5/2017",
    "high": 53,
    "avg": 48,
    "low": 42
  },
  {
    "date": "3/6/2017",
    "high": 56,
    "avg": 50,
    "low": 43
  },
  {
    "date": "3/7/2017",
    "high": 59,
    "avg": 51,
    "low": 42
  },
  {
    "date": "3/8/2017",
    "high": 64,
    "avg": 55,
    "low": 46
  },
  {
    "date": "3/9/2017",
    "high": 67,
    "avg": 59,
    "low": 50
  },
  {
    "date": "3/10/2017",
    "high": 67,
    "avg": 60,
    "low": 52
  },
  {
    "date": "3/11/2017",
    "high": 65,
    "avg": 58,
    "low": 50
  },
  {
    "date": "3/12/2017",
    "high": 70,
    "avg": 59,
    "low": 48
  },
  {
    "date": "3/13/2017",
    "high": 77,
    "avg": 62,
    "low": 48
  },
  {
    "date": "3/14/2017",
    "high": 76,
    "avg": 65,
    "low": 54
  },
  {
    "date": "3/15/2017",
    "high": 62,
    "avg": 57,
    "low": 52
  },
  {
    "date": "3/16/2017",
    "high": 65,
    "avg": 58,
    "low": 51
  },
  {
    "date": "3/17/2017",
    "high": 71,
    "avg": 60,
    "low": 48
  },
  {
    "date": "3/18/2017",
    "high": 69,
    "avg": 61,
    "low": 53
  },
  {
    "date": "3/19/2017",
    "high": 63,
    "avg": 59,
    "low": 54
  },
  {
    "date": "3/20/2017",
    "high": 62,
    "avg": 59,
    "low": 55
  },
  {
    "date": "3/21/2017",
    "high": 65,
    "avg": 61,
    "low": 57
  },
  {
    "date": "3/22/2017",
    "high": 59,
    "avg": 56,
    "low": 52
  },
  {
    "date": "3/23/2017",
    "high": 61,
    "avg": 56,
    "low": 50
  },
  {
    "date": "3/24/2017",
    "high": 58,
    "avg": 56,
    "low": 53
  },
  {
    "date": "3/25/2017",
    "high": 61,
    "avg": 57,
    "low": 52
  },
  {
    "date": "3/26/2017",
    "high": 63,
    "avg": 58,
    "low": 52
  },
  {
    "date": "3/27/2017",
    "high": 61,
    "avg": 56,
    "low": 51
  },
  {
    "date": "3/28/2017",
    "high": 68,
    "avg": 58,
    "low": 48
  },
  {
    "date": "3/29/2017",
    "high": 65,
    "avg": 59,
    "low": 53
  },
  {
    "date": "3/30/2017",
    "high": 61,
    "avg": 56,
    "low": 51
  },
  {
    "date": "3/31/2017",
    "high": 68,
    "avg": 62,
    "low": 55
  },
  {
    "date": "4/1/2017",
    "high": 78,
    "avg": 66,
    "low": 53
  },
  {
    "date": "4/2/2017",
    "high": 74,
    "avg": 63,
    "low": 52
  },
  {
    "date": "4/3/2017",
    "high": 68,
    "avg": 59,
    "low": 49
  },
  {
    "date": "4/4/2017",
    "high": 72,
    "avg": 60,
    "low": 48
  },
  {
    "date": "4/5/2017",
    "high": 68,
    "avg": 60,
    "low": 52
  },
  {
    "date": "4/6/2017",
    "high": 65,
    "avg": 58,
    "low": 50
  },
  {
    "date": "4/7/2017",
    "high": 64,
    "avg": 57,
    "low": 50
  },
  {
    "date": "4/8/2017",
    "high": 56,
    "avg": 52,
    "low": 47
  },
  {
    "date": "4/9/2017",
    "high": 60,
    "avg": 53,
    "low": 45
  },
  {
    "date": "4/10/2017",
    "high": 64,
    "avg": 55,
    "low": 46
  },
  {
    "date": "4/11/2017",
    "high": 67,
    "avg": 60,
    "low": 53
  },
  {
    "date": "4/12/2017",
    "high": 64,
    "avg": 59,
    "low": 54
  },
  {
    "date": "4/13/2017",
    "high": 59,
    "avg": 55,
    "low": 50
  },
  {
    "date": "4/14/2017",
    "high": 61,
    "avg": 54,
    "low": 47
  },
  {
    "date": "4/15/2017",
    "high": 67,
    "avg": 57,
    "low": 46
  },
  {
    "date": "4/16/2017",
    "high": 60,
    "avg": 56,
    "low": 52
  },
  {
    "date": "4/17/2017",
    "high": 62,
    "avg": 58,
    "low": 54
  },
  {
    "date": "4/18/2017",
    "high": 67,
    "avg": 60,
    "low": 52
  },
  {
    "date": "4/19/2017",
    "high": 67,
    "avg": 58,
    "low": 49
  },
  {
    "date": "4/20/2017",
    "high": 65,
    "avg": 60,
    "low": 54
  },
  {
    "date": "4/21/2017",
    "high": 74,
    "avg": 63,
    "low": 51
  },
  {
    "date": "4/22/2017",
    "high": 65,
    "avg": 58,
    "low": 51
  },
  {
    "date": "4/23/2017",
    "high": 64,
    "avg": 59,
    "low": 53
  },
  {
    "date": "4/24/2017",
    "high": 62,
    "avg": 58,
    "low": 53
  },
  {
    "date": "4/25/2017",
    "high": 64,
    "avg": 58,
    "low": 52
  },
  {
    "date": "4/26/2017",
    "high": 64,
    "avg": 59,
    "low": 54
  },
  {
    "date": "4/27/2017",
    "high": 65,
    "avg": 59,
    "low": 52
  },
  {
    "date": "4/28/2017",
    "high": 68,
    "avg": 59,
    "low": 49
  },
  {
    "date": "4/29/2017",
    "high": 77,
    "avg": 66,
    "low": 54
  },
  {
    "date": "4/30/2017",
    "high": 74,
    "avg": 62,
    "low": 50
  },
  {
    "date": "5/1/2017",
    "high": 84,
    "avg": 69,
    "low": 54
  },
  {
    "date": "5/2/2017",
    "high": 85,
    "avg": 71,
    "low": 57
  },
  {
    "date": "5/3/2017",
    "high": 87,
    "avg": 70,
    "low": 53
  },
  {
    "date": "5/4/2017",
    "high": 66,
    "avg": 59,
    "low": 52
  },
  {
    "date": "5/5/2017",
    "high": 63,
    "avg": 57,
    "low": 51
  },
  {
    "date": "5/6/2017",
    "high": 63,
    "avg": 57,
    "low": 50
  },
  {
    "date": "5/7/2017",
    "high": 70,
    "avg": 60,
    "low": 50
  },
  {
    "date": "5/8/2017",
    "high": 70,
    "avg": 60,
    "low": 50
  },
  {
    "date": "5/9/2017",
    "high": 75,
    "avg": 63,
    "low": 51
  },
  {
    "date": "5/10/2017",
    "high": 68,
    "avg": 61,
    "low": 53
  },
  {
    "date": "5/11/2017",
    "high": 69,
    "avg": 61,
    "low": 52
  },
  {
    "date": "5/12/2017",
    "high": 64,
    "avg": 58,
    "low": 51
  },
  {
    "date": "5/13/2017",
    "high": 64,
    "avg": 57,
    "low": 49
  },
  {
    "date": "5/14/2017",
    "high": 62,
    "avg": 56,
    "low": 49
  },
  {
    "date": "5/15/2017",
    "high": 63,
    "avg": 57,
    "low": 50
  },
  {
    "date": "5/16/2017",
    "high": 63,
    "avg": 58,
    "low": 52
  },
  {
    "date": "5/17/2017",
    "high": 66,
    "avg": 58,
    "low": 50
  },
  {
    "date": "5/18/2017",
    "high": 76,
    "avg": 63,
    "low": 49
  },
  {
    "date": "5/19/2017",
    "high": 80,
    "avg": 66,
    "low": 52
  },
  {
    "date": "5/20/2017",
    "high": 87,
    "avg": 70,
    "low": 52
  },
  {
    "date": "5/21/2017",
    "high": 77,
    "avg": 65,
    "low": 53
  },
  {
    "date": "5/22/2017",
    "high": 70,
    "avg": 61,
    "low": 51
  },
  {
    "date": "5/23/2017",
    "high": 69,
    "avg": 61,
    "low": 52
  },
  {
    "date": "5/24/2017",
    "high": 69,
    "avg": 61,
    "low": 53
  },
  {
    "date": "5/25/2017",
    "high": 65,
    "avg": 60,
    "low": 55
  },
  {
    "date": "5/26/2017",
    "high": 65,
    "avg": 60,
    "low": 54
  },
  {
    "date": "5/27/2017",
    "high": 67,
    "avg": 61,
    "low": 54
  },
  {
    "date": "5/28/2017",
    "high": 64,
    "avg": 59,
    "low": 54
  },
  {
    "date": "5/29/2017",
    "high": 60,
    "avg": 57,
    "low": 53
  },
  {
    "date": "5/30/2017",
    "high": 63,
    "avg": 58,
    "low": 52
  },
  {
    "date": "5/31/2017",
    "high": 70,
    "avg": 62,
    "low": 54
  },
  {
    "date": "6/1/2017",
    "high": 69,
    "avg": 62,
    "low": 55
  },
  {
    "date": "6/2/2017",
    "high": 71,
    "avg": 62,
    "low": 53
  },
  {
    "date": "6/3/2017",
    "high": 67,
    "avg": 61,
    "low": 54
  },
  {
    "date": "6/4/2017",
    "high": 67,
    "avg": 60,
    "low": 53
  },
  {
    "date": "6/5/2017",
    "high": 74,
    "avg": 63,
    "low": 51
  },
  {
    "date": "6/6/2017",
    "high": 65,
    "avg": 59,
    "low": 52
  },
  {
    "date": "6/7/2017",
    "high": 68,
    "avg": 61,
    "low": 54
  },
  {
    "date": "6/8/2017",
    "high": 66,
    "avg": 63,
    "low": 59
  },
  {
    "date": "6/9/2017",
    "high": 66,
    "avg": 61,
    "low": 56
  },
  {
    "date": "6/10/2017",
    "high": 68,
    "avg": 61,
    "low": 54
  },
  {
    "date": "6/11/2017",
    "high": 64,
    "avg": 59,
    "low": 54
  },
  {
    "date": "6/12/2017",
    "high": 65,
    "avg": 59,
    "low": 53
  },
  {
    "date": "6/13/2017",
    "high": 70,
    "avg": 61,
    "low": 52
  },
  {
    "date": "6/14/2017",
    "high": 73,
    "avg": 63,
    "low": 53
  },
  {
    "date": "6/15/2017",
    "high": 72,
    "avg": 64,
    "low": 55
  },
  {
    "date": "6/16/2017",
    "high": 75,
    "avg": 66,
    "low": 57
  },
  {
    "date": "6/17/2017",
    "high": 77,
    "avg": 66,
    "low": 55
  },
  {
    "date": "6/18/2017",
    "high": 97,
    "avg": 80,
    "low": 62
  },
  {
    "date": "6/19/2017",
    "high": 77,
    "avg": 68,
    "low": 58
  },
  {
    "date": "6/20/2017",
    "high": 72,
    "avg": 64,
    "low": 56
  },
  {
    "date": "6/21/2017",
    "high": 76,
    "avg": 65,
    "low": 54
  },
  {
    "date": "6/22/2017",
    "high": 80,
    "avg": 70,
    "low": 59
  },
  {
    "date": "6/23/2017",
    "high": 73,
    "avg": 66,
    "low": 58
  },
  {
    "date": "6/24/2017",
    "high": 69,
    "avg": 63,
    "low": 57
  },
  {
    "date": "6/25/2017",
    "high": 68,
    "avg": 63,
    "low": 57
  },
  {
    "date": "6/26/2017",
    "high": 73,
    "avg": 66,
    "low": 59
  },
  {
    "date": "6/27/2017",
    "high": 66,
    "avg": 62,
    "low": 57
  },
  {
    "date": "6/28/2017",
    "high": 66,
    "avg": 62,
    "low": 57
  },
  {
    "date": "6/29/2017",
    "high": 66,
    "avg": 61,
    "low": 56
  },
  {
    "date": "6/30/2017",
    "high": 65,
    "avg": 60,
    "low": 54
  },
  {
    "date": "7/1/2017",
    "high": 66,
    "avg": 60,
    "low": 54
  },
  {
    "date": "7/2/2017",
    "high": 74,
    "avg": 64,
    "low": 54
  },
  {
    "date": "7/3/2017",
    "high": 79,
    "avg": 67,
    "low": 54
  },
  {
    "date": "7/4/2017",
    "high": 72,
    "avg": 64,
    "low": 55
  },
  {
    "date": "7/5/2017",
    "high": 67,
    "avg": 61,
    "low": 55
  },
  {
    "date": "7/6/2017",
    "high": 73,
    "avg": 64,
    "low": 54
  },
  {
    "date": "7/7/2017",
    "high": 81,
    "avg": 68,
    "low": 54
  },
  {
    "date": "7/8/2017",
    "high": 79,
    "avg": 68,
    "low": 56
  },
  {
    "date": "7/9/2017",
    "high": 70,
    "avg": 62,
    "low": 53
  },
  {
    "date": "7/10/2017",
    "high": 68,
    "avg": 62,
    "low": 55
  },
  {
    "date": "7/11/2017",
    "high": 73,
    "avg": 64,
    "low": 55
  },
  {
    "date": "7/12/2017",
    "high": 70,
    "avg": 63,
    "low": 56
  },
  {
    "date": "7/13/2017",
    "high": 70,
    "avg": 62,
    "low": 54
  },
  {
    "date": "7/14/2017",
    "high": 75,
    "avg": 65,
    "low": 55
  },
  {
    "date": "7/15/2017",
    "high": 85,
    "avg": 70,
    "low": 55
  },
  {
    "date": "7/16/2017",
    "high": 84,
    "avg": 72,
    "low": 59
  },
  {
    "date": "7/17/2017",
    "high": 72,
    "avg": 65,
    "low": 57
  },
  {
    "date": "7/18/2017",
    "high": 67,
    "avg": 61,
    "low": 55
  },
  {
    "date": "7/19/2017",
    "high": 70,
    "avg": 62,
    "low": 54
  },
  {
    "date": "7/20/2017",
    "high": 68,
    "avg": 62,
    "low": 56
  },
  {
    "date": "7/21/2017",
    "high": 70,
    "avg": 63,
    "low": 55
  },
  {
    "date": "7/22/2017",
    "high": 80,
    "avg": 68,
    "low": 55
  },
  {
    "date": "7/23/2017",
    "high": 70,
    "avg": 63,
    "low": 56
  },
  {
    "date": "7/24/2017",
    "high": 74,
    "avg": 65,
    "low": 55
  },
  {
    "date": "7/25/2017",
    "high": 77,
    "avg": 68,
    "low": 58
  },
  {
    "date": "7/26/2017",
    "high": 73,
    "avg": 65,
    "low": 57
  },
  {
    "date": "7/27/2017",
    "high": 76,
    "avg": 67,
    "low": 57
  },
  {
    "date": "7/28/2017",
    "high": 67,
    "avg": 62,
    "low": 57
  },
  {
    "date": "7/29/2017",
    "high": 68,
    "avg": 63,
    "low": 57
  },
  {
    "date": "7/30/2017",
    "high": 71,
    "avg": 64,
    "low": 57
  },
  {
    "date": "7/31/2017",
    "high": 69,
    "avg": 62,
    "low": 55
  },
  {
    "date": "8/1/2017",
    "high": 75,
    "avg": 65,
    "low": 54
  },
  {
    "date": "8/2/2017",
    "high": 80,
    "avg": 68,
    "low": 56
  },
  {
    "date": "8/3/2017",
    "high": 78,
    "avg": 70,
    "low": 61
  },
  {
    "date": "8/4/2017",
    "high": 76,
    "avg": 68,
    "low": 60
  },
  {
    "date": "8/5/2017",
    "high": 73,
    "avg": 66,
    "low": 59
  },
  {
    "date": "8/6/2017",
    "high": 71,
    "avg": 66,
    "low": 61
  },
  {
    "date": "8/7/2017",
    "high": 71,
    "avg": 66,
    "low": 61
  },
  {
    "date": "8/8/2017",
    "high": 72,
    "avg": 66,
    "low": 60
  },
  {
    "date": "8/9/2017",
    "high": 67,
    "avg": 63,
    "low": 59
  },
  {
    "date": "8/10/2017",
    "high": 71,
    "avg": 65,
    "low": 59
  },
  {
    "date": "8/11/2017",
    "high": 71,
    "avg": 65,
    "low": 58
  },
  {
    "date": "8/12/2017",
    "high": 73,
    "avg": 67,
    "low": 60
  },
  {
    "date": "8/13/2017",
    "high": 72,
    "avg": 66,
    "low": 60
  },
  {
    "date": "8/14/2017",
    "high": 63,
    "avg": 61,
    "low": 59
  },
  {
    "date": "8/15/2017",
    "high": 73,
    "avg": 66,
    "low": 59
  },
  {
    "date": "8/16/2017",
    "high": 75,
    "avg": 68,
    "low": 60
  },
  {
    "date": "8/17/2017",
    "high": 72,
    "avg": 66,
    "low": 60
  },
  {
    "date": "8/18/2017",
    "high": 72,
    "avg": 66,
    "low": 59
  },
  {
    "date": "8/19/2017",
    "high": 76,
    "avg": 68,
    "low": 59
  },
  {
    "date": "8/20/2017",
    "high": 72,
    "avg": 67,
    "low": 61
  },
  {
    "date": "8/21/2017",
    "high": 75,
    "avg": 68,
    "low": 61
  },
  {
    "date": "8/22/2017",
    "high": 73,
    "avg": 67,
    "low": 60
  },
  {
    "date": "8/23/2017",
    "high": 70,
    "avg": 65,
    "low": 59
  },
  {
    "date": "8/24/2017",
    "high": 70,
    "avg": 64,
    "low": 58
  },
  {
    "date": "8/25/2017",
    "high": 69,
    "avg": 62,
    "low": 55
  },
  {
    "date": "8/26/2017",
    "high": 81,
    "avg": 67,
    "low": 53
  },
  {
    "date": "8/27/2017",
    "high": 77,
    "avg": 69,
    "low": 60
  },
  {
    "date": "8/28/2017",
    "high": 73,
    "avg": 66,
    "low": 58
  },
  {
    "date": "8/29/2017",
    "high": 67,
    "avg": 63,
    "low": 58
  },
  {
    "date": "8/30/2017",
    "high": 69,
    "avg": 63,
    "low": 56
  },
  {
    "date": "8/31/2017",
    "high": 88,
    "avg": 72,
    "low": 56
  },
  {
    "date": "9/1/2017",
    "high": 104,
    "avg": 86,
    "low": 67
  },
  {
    "date": "9/2/2017",
    "high": 104,
    "avg": 88,
    "low": 72
  },
  {
    "date": "9/3/2017",
    "high": 86,
    "avg": 77,
    "low": 68
  },
  {
    "date": "9/4/2017",
    "high": 84,
    "avg": 76,
    "low": 68
  },
  {
    "date": "9/5/2017",
    "high": 83,
    "avg": 72,
    "low": 60
  },
  {
    "date": "9/6/2017",
    "high": 78,
    "avg": 71,
    "low": 64
  },
  {
    "date": "9/7/2017",
    "high": 72,
    "avg": 67,
    "low": 62
  },
  {
    "date": "9/8/2017",
    "high": 72,
    "avg": 66,
    "low": 60
  },
  {
    "date": "9/9/2017",
    "high": 75,
    "avg": 68,
    "low": 61
  },
  {
    "date": "9/10/2017",
    "high": 92,
    "avg": 77,
    "low": 61
  },
  {
    "date": "9/11/2017",
    "high": 86,
    "avg": 77,
    "low": 67
  },
  {
    "date": "9/12/2017",
    "high": 85,
    "avg": 75,
    "low": 65
  },
  {
    "date": "9/13/2017",
    "high": 74,
    "avg": 69,
    "low": 63
  },
  {
    "date": "9/14/2017",
    "high": 71,
    "avg": 66,
    "low": 60
  },
  {
    "date": "9/15/2017",
    "high": 72,
    "avg": 65,
    "low": 58
  },
  {
    "date": "9/16/2017",
    "high": 72,
    "avg": 64,
    "low": 56
  },
  {
    "date": "9/17/2017",
    "high": 73,
    "avg": 65,
    "low": 56
  },
  {
    "date": "9/18/2017",
    "high": 73,
    "avg": 67,
    "low": 60
  },
  {
    "date": "9/19/2017",
    "high": 73,
    "avg": 66,
    "low": 58
  },
  {
    "date": "9/20/2017",
    "high": 71,
    "avg": 65,
    "low": 59
  },
  {
    "date": "9/21/2017",
    "high": 67,
    "avg": 62,
    "low": 56
  },
  {
    "date": "9/22/2017",
    "high": 70,
    "avg": 64,
    "low": 57
  },
  {
    "date": "9/23/2017",
    "high": 77,
    "avg": 66,
    "low": 54
  },
  {
    "date": "9/24/2017",
    "high": 79,
    "avg": 67,
    "low": 54
  },
  {
    "date": "9/25/2017",
    "high": 82,
    "avg": 69,
    "low": 56
  },
  {
    "date": "9/26/2017",
    "high": 88,
    "avg": 74,
    "low": 59
  },
  {
    "date": "9/27/2017",
    "high": 87,
    "avg": 75,
    "low": 62
  },
  {
    "date": "9/28/2017",
    "high": 81,
    "avg": 70,
    "low": 58
  },
  {
    "date": "9/29/2017",
    "high": 68,
    "avg": 63,
    "low": 57
  },
  {
    "date": "9/30/2017",
    "high": 72,
    "avg": 65,
    "low": 57
  },
  {
    "date": "10/1/2017",
    "high": 73,
    "avg": 65,
    "low": 56
  },
  {
    "date": "10/2/2017",
    "high": 74,
    "avg": 64,
    "low": 54
  },
  {
    "date": "10/3/2017",
    "high": 73,
    "avg": 63,
    "low": 53
  },
  {
    "date": "10/4/2017",
    "high": 76,
    "avg": 64,
    "low": 52
  },
  {
    "date": "10/5/2017",
    "high": 79,
    "avg": 65,
    "low": 50
  },
  {
    "date": "10/6/2017",
    "high": 84,
    "avg": 69,
    "low": 53
  },
  {
    "date": "10/7/2017",
    "high": 77,
    "avg": 66,
    "low": 54
  },
  {
    "date": "10/8/2017",
    "high": 79,
    "avg": 66,
    "low": 53
  },
  {
    "date": "10/9/2017",
    "high": 79,
    "avg": 70,
    "low": 60
  },
  {
    "date": "10/10/2017",
    "high": 76,
    "avg": 65,
    "low": 53
  },
  {
    "date": "10/11/2017",
    "high": 66,
    "avg": 59,
    "low": 51
  },
  {
    "date": "10/12/2017",
    "high": 69,
    "avg": 60,
    "low": 50
  },
  {
    "date": "10/13/2017",
    "high": 73,
    "avg": 62,
    "low": 50
  },
  {
    "date": "10/14/2017",
    "high": 77,
    "avg": 65,
    "low": 52
  },
  {
    "date": "10/15/2017",
    "high": 81,
    "avg": 67,
    "low": 52
  },
  {
    "date": "10/16/2017",
    "high": 83,
    "avg": 70,
    "low": 56
  },
  {
    "date": "10/17/2017",
    "high": 78,
    "avg": 64,
    "low": 50
  },
  {
    "date": "10/18/2017",
    "high": 63,
    "avg": 56,
    "low": 48
  },
  {
    "date": "10/19/2017",
    "high": 67,
    "avg": 61,
    "low": 54
  },
  {
    "date": "10/20/2017",
    "high": 64,
    "avg": 59,
    "low": 54
  },
  {
    "date": "10/21/2017",
    "high": 68,
    "avg": 60,
    "low": 51
  },
  {
    "date": "10/22/2017",
    "high": 73,
    "avg": 63,
    "low": 52
  },
  {
    "date": "10/23/2017",
    "high": 83,
    "avg": 70,
    "low": 56
  },
  {
    "date": "10/24/2017",
    "high": 91,
    "avg": 78,
    "low": 64
  },
  {
    "date": "10/25/2017",
    "high": 83,
    "avg": 73,
    "low": 62
  },
  {
    "date": "10/26/2017",
    "high": 86,
    "avg": 74,
    "low": 61
  },
  {
    "date": "10/27/2017",
    "high": 80,
    "avg": 67,
    "low": 54
  },
  {
    "date": "10/28/2017",
    "high": 67,
    "avg": 60,
    "low": 52
  },
  {
    "date": "10/29/2017",
    "high": 63,
    "avg": 58,
    "low": 53
  },
  {
    "date": "10/30/2017",
    "high": 62,
    "avg": 59,
    "low": 55
  },
  {
    "date": "10/31/2017",
    "high": 66,
    "avg": 59,
    "low": 52
  },
  {
    "date": "11/1/2017",
    "high": 67,
    "avg": 59,
    "low": 50
  },
  {
    "date": "11/2/2017",
    "high": 66,
    "avg": 58,
    "low": 50
  },
  {
    "date": "11/3/2017",
    "high": 68,
    "avg": 63,
    "low": 58
  },
  {
    "date": "11/4/2017",
    "high": 61,
    "avg": 56,
    "low": 50
  },
  {
    "date": "11/5/2017",
    "high": 60,
    "avg": 53,
    "low": 46
  },
  {
    "date": "11/6/2017",
    "high": 63,
    "avg": 57,
    "low": 51
  },
  {
    "date": "11/7/2017",
    "high": 64,
    "avg": 55,
    "low": 46
  },
  {
    "date": "11/8/2017",
    "high": 65,
    "avg": 59,
    "low": 52
  },
  {
    "date": "11/9/2017",
    "high": 68,
    "avg": 64,
    "low": 59
  },
  {
    "date": "11/10/2017",
    "high": 65,
    "avg": 60,
    "low": 55
  },
  {
    "date": "11/11/2017",
    "high": 64,
    "avg": 59,
    "low": 54
  },
  {
    "date": "11/12/2017",
    "high": 63,
    "avg": 57,
    "low": 50
  },
  {
    "date": "11/13/2017",
    "high": 67,
    "avg": 61,
    "low": 55
  },
  {
    "date": "11/14/2017",
    "high": 64,
    "avg": 58,
    "low": 52
  },
  {
    "date": "11/15/2017",
    "high": 65,
    "avg": 60,
    "low": 54
  },
  {
    "date": "11/16/2017",
    "high": 63,
    "avg": 58,
    "low": 53
  },
  {
    "date": "11/17/2017",
    "high": 61,
    "avg": 56,
    "low": 51
  },
  {
    "date": "11/18/2017",
    "high": 62,
    "avg": 53,
    "low": 43
  },
  {
    "date": "11/19/2017",
    "high": 59,
    "avg": 53,
    "low": 46
  },
  {
    "date": "11/20/2017",
    "high": 63,
    "avg": 59,
    "low": 55
  },
  {
    "date": "11/21/2017",
    "high": 66,
    "avg": 61,
    "low": 55
  },
  {
    "date": "11/22/2017",
    "high": 68,
    "avg": 61,
    "low": 54
  },
  {
    "date": "11/23/2017",
    "high": 67,
    "avg": 62,
    "low": 57
  },
  {
    "date": "11/24/2017",
    "high": 69,
    "avg": 63,
    "low": 56
  },
  {
    "date": "11/25/2017",
    "high": 68,
    "avg": 62,
    "low": 56
  },
  {
    "date": "11/26/2017",
    "high": 67,
    "avg": 60,
    "low": 53
  },
  {
    "date": "11/27/2017",
    "high": 60,
    "avg": 55,
    "low": 50
  },
  {
    "date": "11/28/2017",
    "high": 60,
    "avg": 53,
    "low": 46
  },
  {
    "date": "11/29/2017",
    "high": 64,
    "avg": 56,
    "low": 48
  },
  {
    "date": "11/30/2017",
    "high": 65,
    "avg": 56,
    "low": 46
  },
  {
    "date": "12/1/2017",
    "high": 60,
    "avg": 53,
    "low": 46
  },
  {
    "date": "12/2/2017",
    "high": 58,
    "avg": 53,
    "low": 48
  },
  {
    "date": "12/3/2017",
    "high": 57,
    "avg": 53,
    "low": 49
  },
  {
    "date": "12/4/2017",
    "high": 62,
    "avg": 57,
    "low": 51
  },
  {
    "date": "12/5/2017",
    "high": 66,
    "avg": 57,
    "low": 47
  },
  {
    "date": "12/6/2017",
    "high": 62,
    "avg": 52,
    "low": 42
  },
  {
    "date": "12/7/2017",
    "high": 65,
    "avg": 55,
    "low": 45
  },
  {
    "date": "12/8/2017",
    "high": 62,
    "avg": 53,
    "low": 43
  },
  {
    "date": "12/9/2017",
    "high": 63,
    "avg": 53,
    "low": 43
  },
  {
    "date": "12/10/2017",
    "high": 63,
    "avg": 53,
    "low": 42
  },
  {
    "date": "12/11/2017",
    "high": 65,
    "avg": 55,
    "low": 44
  },
  {
    "date": "12/12/2017",
    "high": 60,
    "avg": 51,
    "low": 42
  },
  {
    "date": "12/13/2017",
    "high": 61,
    "avg": 51,
    "low": 41
  },
  {
    "date": "12/14/2017",
    "high": 64,
    "avg": 54,
    "low": 43
  },
  {
    "date": "12/15/2017",
    "high": 57,
    "avg": 51,
    "low": 44
  },
  {
    "date": "12/16/2017",
    "high": 64,
    "avg": 57,
    "low": 49
  },
  {
    "date": "12/17/2017",
    "high": 63,
    "avg": 56,
    "low": 48
  },
  {
    "date": "12/18/2017",
    "high": 61,
    "avg": 53,
    "low": 44
  },
  {
    "date": "12/19/2017",
    "high": 60,
    "avg": 52,
    "low": 43
  },
  {
    "date": "12/20/2017",
    "high": 55,
    "avg": 51,
    "low": 47
  },
  {
    "date": "12/21/2017",
    "high": 56,
    "avg": 48,
    "low": 40
  },
  {
    "date": "12/22/2017",
    "high": 53,
    "avg": 46,
    "low": 38
  },
  {
    "date": "12/23/2017",
    "high": 53,
    "avg": 48,
    "low": 43
  },
  {
    "date": "12/24/2017",
    "high": 53,
    "avg": 50,
    "low": 47
  },
  {
    "date": "12/25/2017",
    "high": 57,
    "avg": 51,
    "low": 44
  },
  {
    "date": "12/26/2017",
    "high": 58,
    "avg": 51,
    "low": 43
  },
  {
    "date": "12/27/2017",
    "high": 56,
    "avg": 50,
    "low": 43
  },
  {
    "date": "12/28/2017",
    "high": 57,
    "avg": 50,
    "low": 43
  },
  {
    "date": "12/29/2017",
    "high": 56,
    "avg": 50,
    "low": 44
  },
  {
    "date": "12/30/2017",
    "high": 59,
    "avg": 51,
    "low": 43
  },
  {
    "date": "12/31/2017",
    "high": 57,
    "avg": 51,
    "low": 45
  }
];

export {
    KernelDensityEstimator,
    EpanechnikovKernel,
    moviesData,
    sxywuData
};
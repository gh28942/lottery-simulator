# Lottery Simulator
The lottery simulator is a web app made with Node.js, React and Bootstrap. You can use it to simulate a lotto game from a user's perspective. A game ends once the jackpot is won by the player. 
<br><br>
You can find the <b><a href="https://gh28942.github.io/lottery-simulator/overview.html">Github page here</a>.</b>

<br><br>

![Overview over lotto games](scr/lotto-overview.jpg?raw=true "Overview over lotto games")
<p align="center">Overview over lotto games.</p>
<br><br>

![Lotto game UI](scr/lotto-game.jpg?raw=true "Lotto game UI")
<p align="center">Lotto game UI.</p>

<br><br>

The following lotto games are simulated in this implementation: 
<table class="table">
						  <thead>
							<tr>
							  <th scope="col">Lottery</th>
							  <th scope="col">Numbers</th>
							  <th scope="col">Price</th>
							  <th scope="col">Days</th>
							  <th scope="col">Jackpot probability</th>
							</tr>
						  </thead>
						  <tbody>
							<tr>
							  <th scope="row">Example</th>
							  <td>6/12</td>
							  <td>€ 10.00,-</td>
							  <td>Every day</td>
							  <td>1 : 924</td>
							</tr>
							<tr>
							  <th scope="row">Austrian*</th>
							  <td>6/45</td>
							  <td>€ 1.20,-</td>
							  <td>Wed, Sun</td>
							  <td>1 : 8,145,060</td>
							</tr>
							<tr>
							  <th scope="row">DCB (China)</th>
							  <td>6/33 + 1/16</td>
							  <td>¥ 2.00,-</td>
							  <td>Tue, Thu, Sun</td>
							  <td>1 : 17,721,088</td>
							</tr>
							<tr>
							  <th scope="row">Mega-Sena</th>
							  <td>6/60</td>
							  <td>R$ 4.50,-</td>
							  <td>Wed, Sat</td>
							  <td>1 : 50,063,860</td>
							</tr>
							<tr>
							  <th scope="row">Eurojackpot</th>
							  <td>5/50 + 2/10</td>
							  <td>€ 2.00,-</td>
							  <td>Fri</td>
							  <td>1 : 95,344,200</td>
							</tr>
							<tr>
							  <th scope="row">Euromillions</th>
							  <td>5/50 + 2/12</td>
							  <td>€ 2.50,-</td>
							  <td>Tue, Fri</td>
							  <td>1 : 139,838,160</td>
							</tr>
							<tr>
							  <th scope="row">Megamillions</th>
							  <td>5/70 + 1/25</td>
							  <td>$ 2.00,-</td>
							  <td>Tue, Fri</td>
							  <td>1 : 258,890,850</td>
							</tr>
							<tr>
							  <th scope="row">Powerball</th>
							  <td>5/69 + 1/26</td>
							  <td>$ 2.00,-</td>
							  <td>Wed, Sat</td>
							  <td>1 : 292,201,338</td>
							</tr>
							<tr>
							  <th scope="row">SuperEnalotto</th>
							  <td>6/90</td>
							  <td>€ 1.00,-</td>
							  <td>Tue, Thu, Sat</td>
							  <td>1 : 622,614,630</td>
							</tr>
						  </tbody>	
					  </table>
            <br>
Not included in the simulation are the Joker (at) and Superstar (it), which are additional lotteries that can be added to a ticket. The Jolly number (it) is a part of the simulation. Also, the Power Play (Powerball) and Megaplier (Megamillions) options are not included in the simulation since they do only multipliy (lower-tier) winnings at the expense of an increased ticket cost. The simulation focuses on the lotto games and their jackpots.
<br><br>
* The numbers 6 in 45 are also used in the following games: PCSO Mega Lotto (Philippines), Gosloto (Russia), Toto (Germany), Baloto (Colombia), Ireland National Lotto, Canada Lottario, Australia, South Korea and Croatia Lotto.
<br><br>
<b>Disclaimer:</b> This program does only simulate a lottery game. My website/Web-app/Github page is not affiliated with any lottery game company. It is merely a simulation and no real money is used in it. I do not own any of the trademarks listed here.



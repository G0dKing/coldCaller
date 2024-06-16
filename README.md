# coldCaller.io

## Sales Lead Generator

### Version: 0.0.0

#### I. Description

This application's primary purpose is to automatically generate lists of leads for use in sales, market research, and so on. In the context of this application, a "lead" is essentially a business, organization, or individual that is likely open to investing capital into its own growth, thereby increasing the success-rate of convincing them to buy a given product or service, by means of sales tactics including targeted advertising, personalized sales pitches, in-person solicitation, and cold-calls. Once a lead has been identified, it is paired with its publicly available contact information and stored as a database entry for future use.

#### II. How It Works

The application works by using information gained from a combination of user input, data gleaned passively from the user's device or devices nearby, and (eventually) artificial intelligence to essentially configure one or more adaptable webcrawlers, written in Python or Javascript. These webcrawlers then scrape data relevant to the user's needs in the form of contact information of businesses that have recently joined their local branch of the Chamber of Commerce and other publicly accessible aggregators of businesses demonstrating a willingess to spend money on themselves. This will ultimately be supplemented by AI-powered analytics to compute an algorithm capable of assigning a rating to businesses that more accurately reflects their "willingness to invest" as an integer derived from a series of calculations to reduce the subjectvity of this variable and ultimately provide results that are highly likely to result in the successful completion of a sale. Once all of this data has been scraped, it is cleaned, organized according to user preference, and presented as an organized, easy-to-read, visually-appealing table that can be exported in both human and machine-readable formats such as .HTML, .MD, .CSV, .JSON, .XML, .YAML, or .TXT. The results of each scan are also stored within a higher-level database that contains the aggregrate data of all scans made by the app's Users on a universal level, contibuting to the construction of a vast, comprehensive reservoir of collected data. This master database will ultimately be converted for use as a REST API accessible to members of the Enterprise tier. Additionally, the raw data itself will be sold to advertisers, research firms, corporations, agencies, governments, and other parties on an individual, case-by-case basis.

#### III. Tools & Technology

1. MongoDB:
    - leadName,
    - phone,
    - email,
    - address,
    - startDate,
    - ownerName

2. Express.js
    - API proxy server
    - middleware

3. React.js Native
    - frontend user interface
    - component based rendering in-browser
    - Native gives mobile application support

4. Node.js
    - full-featured javascript web-server
    - backend

5. Python
    - versatile, programming language, used supplementary in this context
    - highly efficient web scraping and data mining

#### IV. Application Flow

0. The User registers a new account, upgrades to a Premium membership, and ensures everything has been properly setup and configured.
1. The User loads a new instance of the application and successfully logs into their account, which loads the User Dashboard screen.
2. The Dashboard serves as a centralized hub from which the User can view and/or access important data across sessions, and access the app's features by navigating the various options and menus. It is here the User can configure and initialize a webcrawler specific to the User's needs and begin the scraping process.
3. During the data-collection and preparation process, the User is shown a visually-appealing loading screen. The loading screen prominently displays a percentage-based progress-indicator made up of the completed percentage of the process in integer form within a circular, animated loading-bar that gradually fills as the integer increases. Beneath the progress indicator is a console window that displays console output of the data-collection process. This output can be optionally logged for later review.
4. Once the data is ready for display, the application indicates the successful completion of the data-collection process, and the User is automatically redirected to the Results page. Here, the generated leads are listed as entries containing the business's name, the date on which it joined its local Chamber of Commerce, general info about the business, an algorithmically calculated rating that represents a minimally subjective "willingess to buy" quotient, and the business contact information including phone numbers, email addresses, P.O. boxes, online platforms, and so on. These results are automatically preserved as entries to the database.

#### V. Local Development

1. Install Required Software:
   - Python 3 (Latest Version)
   - Anaconda/Miniconda (Optional)
   - Node Version Manager, or the LTS version of NPM
   - Git (Latest Version)
   - MongoDB (Local or Remote via Atlas)

2. Prepare the Local Environment:

```shell
# Navigate to your preferred directory, then clone and enter the repository:
cd ~ && git clone https://github.com/G0dKing/coldCaller.git && cd coldCaller

# Update .env.no_uri in the server directory and rename it to .env:
echo "MONGO_URI=<Replace_With_Your_Database_URI>" >> server/.env.no_uri
mv server/.env.no_uri server/.env

# Activate a virtual Python environment (select only one of the two methods below):

# Method One (if Anaconda is not installed):
source scraper/venv/bin/activate

# Method Two (if Anconda is installed):
conda activate && conda create env && conda use env

# Then install all package dependencies to that environment:
pip3 install -r scraper/requirements.txt

# Switch to the latest LTS version of NPM using NVM, then run the deployment script:
nvm install --lts
nvm use --lts

# Start a development server (http://localhost:5170):
npm run dev_server

# Or, compile a static build and deploy to a production server (http://localhost:5000):
npm run deploy
```

3 Integrate Your Contributions
    - Please ensure the names of your commits and branches conform to the guidelines set by our [contribution policy](https://github.com/G0dking/coldCaller/POLICY.md).
    - To submit your changes for review, submit an official Pull Request after running the following commands:

```shell
cd ~/coldCaller     # modify as needed to reflect the root directory of your local cloned repository
git pull origin main
git checkout -b <branch_name>
git add .
git commit -m "<brief_description_of_changes>"
git push origin <branch_name>
```

#### VI. Licensing and Copyright Information

The MIT License (MIT)
Copyright © 2024 Alex Pariah

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

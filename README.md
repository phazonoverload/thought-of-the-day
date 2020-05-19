
# Thought of the Day Call-In Service

Set up a database with audio files and their associated dates. When users call a virtual phone number they will have today's audio file played to them. 

This project was built to support those who can't make it to group faith gatherings and don't have the provision to join video calls. 

## Requirements

* A GitHub account
* A Netlify account
* An Airtable account
* A Vonage API Account

## Set Up

1. Login to your Airtable account and [copy this boilerplate base into your account](https://airtable.com/universe/expAsws2drq7bN5Lh/thought-of-the-day).
1. Go to your [Airtable account](https://airtable.com/account), generate a personal API key and take note of it. Do not share this key as it carries the same permissions as your entire Airtable account.
1. Go to the [Airtable API dashboard](https://airtable.com/api), select your new base and take note of the Base ID (in the first section on the page).
1. [Click this link](https://app.netlify.com/start/deploy?repository=https://github.com/phazonoverload/thought-of-the-day) and fill in your Airtable Base ID and API Key. Your Airtable Table should be `Thoughts` unless you've changed the table name in the new Airtable base. Also provide a fallback message which will be read to your users if there is no thought of the day. 
1. Click save and deploy and wait for the Production deploy to complete successfully. Take note of the Netlify application URL.
1. Sign up for a [Vonage API Account](https://dashboard.nexmo.com).
1. [Buy a new Vonage virtual number](https://dashboard.nexmo.com/buy-numbers).
1. [Create a new Vonage API application](https://dashboard.nexmo.com/applications/new):
    1. Provide and name you want - it has no impact on this project.
    1. Click _Generate public and private key_.
    1. Turn on Voice under Capabilities.
        1. Event URL: **your_netlify_app_url**/.netlify/functions/event
        1. Answer URL: **your_netlify_app_url**/.netlify/functions/answer
    1. Save changes and in the 'Linked numbers' section link your new virtual number

When users call the number they will now get a thought of the day, or a fallback message.

## Adding thoughts

1. Add a new row in Airtable
1. Provide the thought date in the Date field
1. Upload a single MP3 file to the File field

## Notes

* If there is more than one thought for the day then this application will pick the first.
* The 'Today' field is automatic and can be ignored, but must exist.

AdWords User Script: Label Inheritance
=========================

AdWords user script to have keywords inherit labels from their parent ad groups.

Usage
---
1. First use: create a new label named 'changed' (case sensitive), install the user script in your AdWords account.
2. Change labels for any number of ad groups. Add the label 'changed' to any ad group you (re-)label, so the user script knows it should be processed for inheritance.
3. Run the user script. It's under 'Bulk Operations'. All keywords in changed ad groups will now inherit their parent ad group's label, and the 'changed' label will be removed from the ad group once processed.

Notes
---
- The 'changed' label needs to be added so the script will only process ad groups that need to be updated with inheritance. Without this step, applying inheritance to an entire account led to problems on larger accounts due to the 30 min. limit on user scripts.
- Although this script doesn't support it, similar downwards inheritance can be achieved from campaign to ad group. I might add it later, or feel free to do so yourself.

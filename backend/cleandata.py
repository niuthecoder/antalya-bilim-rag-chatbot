import pandas as pd

# Load your data
df = pd.read_csv("dataset.csv")

# Clean the data
df = df.drop_duplicates()  # Remove duplicates
df['attribute_value'] = df['attribute_value'].str.strip()  # Remove extra spaces
df = df[df['attribute_value'] != '']  # Remove empty rows

# Standardize formats - Example for trustees
trustee_mask = df['entity_type'] == 'trustee'
df.loc[trustee_mask, 'attribute_value'] = df.loc[trustee_mask, 'attribute_value'].str.replace('–', '-')  # Standardize dash

# Save cleaned data
df.to_csv("cleaned_dataset.csv", index=False)
print("Data cleaned and saved as cleaned_dataset.csv")
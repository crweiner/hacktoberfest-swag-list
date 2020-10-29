# importing google_images_download module 
'''
Python Module for download google image in one click by User Input'''
from google_images_download import google_images_download 

# creating object 
response = google_images_download.googleimagesdownload() 
inp =input("Enter Your Search Word:\n")
num = int(input("Number Of Pics To Downloads :\n"))
search_queries =[
	
inp, 
] 


def downloadimages(query): 
	# keywords is the search query 
	# format is the image file format 
	# limit is the number of images to be downloaded 
	# print urs is to print the image file url 
	# size is the image size which can 
	# be specified manually ("large, medium, icon") 
	# aspect ratio denotes the height width ratio 
	# of images to download. ("tall, square, wide, panoramic") 
	arguments ={"keywords": query, 
				"format": "jpg", 
				"limit":num, 
				"print_urls":True, 
				"size": "large" } 
	try: 
		response.download(arguments) 
	
	# Handling File NotFound Error	 
	except FileNotFoundError: 
		arguments = {"keywords": query, 
					"format": "jpg", 
					"limit":4, 
					"print_urls":True, 
					"size": "medium"} 
					
		# Providing arguments for the searched query 
		try: 
			# Downloading the photos based 
			# on the given arguments 
			response.download(arguments) 
		except: 
			pass

# Driver Code 
for query in search_queries: 
	downloadimages(query) 
	print() 

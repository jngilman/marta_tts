class Location < ActiveRecord::Base
geocoded_by :full_street_address   
after_validation :geocode          

  def full_street_address
  	"#{address}, #{city}, GA"
  end

end

class Card < ActiveRecord::Base
  has_attached_file :image, :styles => { :medium => "200x200>", :thumb => "100x100>" }
end

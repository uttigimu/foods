class DestinationController < ApplicationController
  def angry
  end
  def confirmation
    @shop = Shop.order("RANDOM()").first
  end
end

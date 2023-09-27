class MessagesController < ApplicationController
  def index; end

  def random
    @random_greeting = Message.order('RANDOM()').first&.greetings

    respond_to do |format|
      format.html { render :random }
      format.json { render json: { greeting: @random_greeting } }
    end
  end
end
